import snapshotJson from '../data/github-repos.json'
import { collaborations, repoOverrides, type ProjectLink } from '../data/projects.ts'
import { prettifyRepoName, type RepoSnapshot } from './repos.ts'
import { SKILLS, type Skill } from './skills.ts'

export const snapshot = snapshotJson as RepoSnapshot

/** A unified card model for both GitHub repos and collaborator-hosted projects. */
export interface Project {
  key: string
  title: string
  summary: string | null
  repoUrl: string
  image?: { src: string, alt: string }
  links: ProjectLink[]
  skills: Skill[]
  /** Secondary chips: primary language, tooling, etc. */
  tags: string[]
  stars: number
  updatedAt?: string
  featured: boolean
}

export const githubProjects: Project[] = snapshot.repos.map((repo) => {
  const extra = repoOverrides[repo.name] ?? {}
  const links = [...(extra.links ?? [])]
  if (repo.homepage) links.push({ label: 'Live site', href: repo.homepage })

  return {
    key: repo.name,
    title: extra.title ?? prettifyRepoName(repo.name),
    summary: extra.summary ?? repo.description,
    repoUrl: repo.url,
    image: extra.image,
    links,
    skills: repo.skills,
    tags: repo.language && !(SKILLS as readonly string[]).includes(repo.language) ? [repo.language] : [],
    stars: repo.stars,
    updatedAt: repo.pushedAt,
    featured: extra.featured ?? false
  }
})

export const teamProjects: Project[] = collaborations.map((c) => ({
  key: c.repo,
  title: c.title,
  summary: c.summary,
  repoUrl: c.repo,
  image: c.image,
  links: [],
  skills: c.skills,
  tags: c.tags,
  stars: 0,
  featured: false
}))

export function projectsWithSkill (projects: Project[], skill: Skill | null): Project[] {
  return skill ? projects.filter((p) => p.skills.includes(skill)) : projects
}

export function isSkill (value: string | null): value is Skill {
  return value !== null && (SKILLS as readonly string[]).includes(value)
}
