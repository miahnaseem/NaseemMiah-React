/**
 * Pulls the latest public repositories from GitHub, detects which headline
 * skills each one exercises, and writes a snapshot the site renders from.
 *
 * Runs automatically before `npm run build`. Set GITHUB_TOKEN to avoid the
 * 60 req/hr anonymous rate limit. If GitHub can't be reached, the committed
 * snapshot is left untouched so builds never fail on a network hiccup.
 */
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { detectSkills, type RepoSignals, type Skill } from '../src/lib/skills.ts'
import type { Repo, RepoSnapshot } from '../src/lib/repos.ts'

const USER = process.env.GITHUB_USER ?? 'miahnaseem'
const MAX_REPOS = 12
const OUTPUT = fileURLToPath(new URL('../src/data/github-repos.json', import.meta.url))

interface GitHubRepo {
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  topics?: string[]
  stargazers_count: number
  pushed_at: string
  default_branch: string
  fork: boolean
  archived: boolean
  size: number
}

interface GitHubTree {
  tree: { path: string, type: string }[]
}

interface PackageJson {
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
}

const headers: Record<string, string> = {
  Accept: 'application/vnd.github+json',
  'User-Agent': `${USER}-portfolio-build`
}
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`

async function getJson<T> (url: string, init?: RequestInit): Promise<T | null> {
  const res = await fetch(url, { headers, ...init })
  if (res.status === 404 || res.status === 409) return null // missing file / empty repo
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`)
  return await res.json() as T
}

async function gatherSignals (repo: GitHubRepo): Promise<RepoSignals> {
  const base = `https://api.github.com/repos/${USER}/${repo.name}`
  const languages = await getJson<Record<string, number>>(`${base}/languages`)
  const tree = await getJson<GitHubTree>(`${base}/git/trees/${repo.default_branch}?recursive=1`)
  const files = tree?.tree.filter((n) => n.type === 'blob').map((n) => n.path) ?? []

  let dependencies: string[] = []
  if (files.includes('package.json')) {
    // raw.githubusercontent.com doesn't count against the API rate limit.
    const pkg = await getJson<PackageJson>(
      `https://raw.githubusercontent.com/${USER}/${repo.name}/${repo.default_branch}/package.json`,
      { headers: { 'User-Agent': headers['User-Agent']! } }
    )
    dependencies = Object.keys({ ...pkg?.dependencies, ...pkg?.devDependencies })
  }

  return { languages: languages ?? {}, topics: repo.topics ?? [], files, dependencies }
}

async function readPreviousSkills (): Promise<Map<string, Skill[]>> {
  try {
    const old = JSON.parse(await readFile(OUTPUT, 'utf8')) as RepoSnapshot
    return new Map(old.repos.map((r) => [r.name, r.skills]))
  } catch {
    return new Map()
  }
}

async function main (): Promise<void> {
  const all = await getJson<GitHubRepo[]>(
    `https://api.github.com/users/${USER}/repos?type=owner&sort=pushed&per_page=100`
  )
  if (!all) throw new Error(`GitHub user "${USER}" not found`)

  const candidates = all
    .filter((r) => !r.fork && r.size > 0 && (r.language || r.description))
    .slice(0, MAX_REPOS)

  const previous = await readPreviousSkills()

  // Sequential on purpose: bursts of parallel connections get throttled.
  const repos: Repo[] = []
  for (const r of candidates) {
    let skills: Skill[]
    try {
      skills = detectSkills(await gatherSignals(r))
    } catch (err) {
      // Most likely rate-limited: reuse last known skills, else infer from basics.
      console.warn(`fetch-repos: could not inspect ${r.name} (${String(err)})`)
      skills = previous.get(r.name) ?? detectSkills({
        languages: r.language ? { [r.language]: 1 } : {},
        topics: r.topics ?? [],
        files: [],
        dependencies: []
      })
    }
    repos.push({
      name: r.name,
      description: r.description,
      url: r.html_url,
      homepage: r.homepage || null,
      language: r.language,
      topics: r.topics ?? [],
      stars: r.stargazers_count,
      pushedAt: r.pushed_at,
      skills
    })
  }

  const snapshot: RepoSnapshot = { user: USER, generatedAt: new Date().toISOString(), repos }
  await writeFile(OUTPUT, JSON.stringify(snapshot, null, 2) + '\n')
  console.log(`fetch-repos: wrote ${repos.length} repos for ${USER}`)
}

main().catch((err: unknown) => {
  const cause = err instanceof Error && err.cause ? ` — ${String(err.cause)}` : ''
  console.warn(`fetch-repos: skipped, keeping existing snapshot (${String(err)}${cause})`)
})
