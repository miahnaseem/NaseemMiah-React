import type { Skill } from './skills.ts'

export interface Repo {
  name: string
  description: string | null
  url: string
  homepage: string | null
  /** Primary language reported by GitHub. */
  language: string | null
  topics: string[]
  stars: number
  pushedAt: string
  skills: Skill[]
}

export interface RepoSnapshot {
  user: string
  generatedAt: string
  repos: Repo[]
}

/** Turns `Early-Prediction-of_Lithium` into `Early Prediction of Lithium`. */
export function prettifyRepoName(name: string): string {
  return name.replace(/[-_]+/g, ' ').trim()
}

const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' })

export function formatMonth(iso: string): string {
  return dateFormat.format(new Date(iso))
}
