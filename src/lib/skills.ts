export const SKILLS = ['Python', 'React', 'TypeScript', 'Docker'] as const
export type Skill = (typeof SKILLS)[number]

/** Signals gathered from a repository that hint at which skills it exercises. */
export interface RepoSignals {
  /** Byte counts per language, as reported by GitHub's languages endpoint. */
  languages: Record<string, number>
  topics: string[]
  /** Paths from the repo's git tree (may be empty if the tree wasn't fetched). */
  files: string[]
  /** Merged dependencies + devDependencies from the root package.json, if any. */
  dependencies: string[]
}

const basename = (path: string) => path.slice(path.lastIndexOf('/') + 1).toLowerCase()

const DOCKER_FILES = /^(dockerfile(\..+)?|.+\.dockerfile|(docker-)?compose(\..+)?\.ya?ml)$/

const detectors: Record<Skill, (s: RepoSignals) => boolean> = {
  Python: (s) =>
    'Python' in s.languages ||
    'Jupyter Notebook' in s.languages ||
    s.topics.includes('python'),
  React: (s) =>
    s.dependencies.includes('react') ||
    s.topics.includes('react') ||
    s.topics.includes('reactjs'),
  TypeScript: (s) =>
    'TypeScript' in s.languages ||
    s.dependencies.includes('typescript') ||
    s.files.some((f) => basename(f) === 'tsconfig.json') ||
    s.topics.includes('typescript'),
  Docker: (s) =>
    'Dockerfile' in s.languages ||
    s.files.some((f) => DOCKER_FILES.test(basename(f))) ||
    s.topics.includes('docker')
}

export function detectSkills(signals: RepoSignals): Skill[] {
  return SKILLS.filter((skill) => detectors[skill](signals))
}

export const SKILL_BLURBS: Record<Skill, string> = {
  Python: 'Data analysis, machine learning and scripting with pandas, scikit-learn and Jupyter.',
  React: 'Component-driven interfaces with hooks, routing and accessible markup.',
  TypeScript: 'Strictly typed front ends and tooling that catch bugs before they ship.',
  Docker: 'Reproducible builds and multi-stage images for consistent deploys.'
}
