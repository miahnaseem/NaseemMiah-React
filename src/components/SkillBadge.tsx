import type { CSSProperties } from 'react'
import type { Skill } from '../lib/skills.ts'
import styles from './SkillBadge.module.css'

const skillVar: Record<Skill, string> = {
  Python: 'var(--skill-python)',
  React: 'var(--skill-react)',
  TypeScript: 'var(--skill-typescript)',
  Docker: 'var(--skill-docker)'
}

export function skillColor (skill: Skill): string {
  return skillVar[skill]
}

interface Props {
  skill: Skill
}

export default function SkillBadge ({ skill }: Props) {
  return (
    <span className={styles.badge} style={{ '--dot': skillColor(skill) } as CSSProperties}>
      {skill}
    </span>
  )
}
