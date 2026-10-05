import type { CSSProperties } from 'react'
import { useSearchParams } from 'react-router'
import ProjectCard from '../components/ProjectCard.tsx'
import { skillColor } from '../components/SkillBadge.tsx'
import { githubProjects, isSkill, projectsWithSkill, teamProjects } from '../lib/portfolio.ts'
import { SKILLS, type Skill } from '../lib/skills.ts'
import { profile } from '../data/profile.ts'
import styles from './Projects.module.css'

export default function Projects () {
  const [params, setParams] = useSearchParams()
  const requested = params.get('skill')
  const active: Skill | null = isSkill(requested) ? requested : null

  const select = (skill: Skill | null) => setParams(skill ? { skill } : {}, { replace: true })

  const repos = projectsWithSkill(githubProjects, active)
  const team = projectsWithSkill(teamProjects, active)

  return (
    <div className='container'>
      <header className={`${styles.header} fade-up`}>
        <h1>Projects</h1>
        <p>
          My most recently updated GitHub repositories, pulled from the GitHub API whenever the
          site deploys. Skills are detected from each repo’s languages, Dockerfiles and dependencies.
        </p>
      </header>

      <div className={styles.filters} role='group' aria-label='Filter by skill'>
        <FilterChip label='All' count={githubProjects.length} pressed={active === null} onClick={() => select(null)} />
        {SKILLS.map((skill) => (
          <FilterChip
            key={skill}
            label={skill}
            color={skillColor(skill)}
            count={projectsWithSkill(githubProjects, skill).length}
            pressed={active === skill}
            onClick={() => select(skill)}
          />
        ))}
      </div>

      <section aria-label='GitHub repositories' aria-live='polite'>
        {repos.length > 0
          ? (
            <div className={styles.grid}>
              {repos.map((p) => <ProjectCard key={p.key} project={p} />)}
            </div>
            )
          : (
            <p className={styles.empty}>
              No public {active} repos yet. <a href={profile.github} target='_blank' rel='noreferrer'>Check GitHub</a> for
              what I’m working on now.
            </p>
            )}
      </section>

      {team.length > 0 && (
        <section aria-labelledby='team-heading' className={styles.team}>
          <h2 id='team-heading'>Team projects</h2>
          <p className={styles.sub}>Collaborations hosted on teammates’ GitHub accounts.</p>
          <div className={styles.grid}>
            {team.map((p) => <ProjectCard key={p.key} project={p} />)}
          </div>
        </section>
      )}
    </div>
  )
}

interface FilterChipProps {
  label: string
  count: number
  pressed: boolean
  color?: string
  onClick: () => void
}

function FilterChip ({ label, count, pressed, color, onClick }: FilterChipProps) {
  return (
    <button
      type='button'
      className={styles.chip}
      aria-pressed={pressed}
      onClick={onClick}
      style={color ? { '--dot': color } as CSSProperties : undefined}
      data-dot={Boolean(color)}
    >
      {label} <span className={styles.count}>{count}</span>
    </button>
  )
}
