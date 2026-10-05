import { describe, expect, it } from 'vitest'
import { detectSkills, type RepoSignals } from './skills.ts'

const empty: RepoSignals = { languages: {}, topics: [], files: [], dependencies: [] }
const detect = (s: Partial<RepoSignals>) => detectSkills({ ...empty, ...s })

describe('detectSkills', () => {
  it('returns nothing for a repo with no signals', () => {
    expect(detect({})).toEqual([])
  })

  it('treats Jupyter notebooks as Python', () => {
    expect(detect({ languages: { 'Jupyter Notebook': 1000 } })).toEqual(['Python'])
  })

  it('detects React and TypeScript from package.json dependencies', () => {
    expect(detect({ dependencies: ['react', 'react-dom', 'typescript'] })).toEqual(['React', 'TypeScript'])
  })

  it('detects TypeScript from a nested tsconfig', () => {
    expect(detect({ files: ['web/tsconfig.json'] })).toEqual(['TypeScript'])
  })

  it.each([
    'Dockerfile',
    'api/Dockerfile.dev',
    'docker-compose.yml',
    'compose.yaml',
    'deploy/web.dockerfile'
  ])('detects Docker from %s', (file) => {
    expect(detect({ files: [file] })).toEqual(['Docker'])
  })

  it('does not mistake unrelated files for Docker', () => {
    expect(detect({ files: ['docs/dockerfile-notes.md', 'composer.json'] })).toEqual([])
  })

  it('honours GitHub topics', () => {
    expect(detect({ topics: ['docker', 'reactjs'] })).toEqual(['React', 'Docker'])
  })

  it('returns skills in canonical order', () => {
    expect(detect({ topics: ['docker', 'typescript', 'react', 'python'] }))
      .toEqual(['Python', 'React', 'TypeScript', 'Docker'])
  })
})
