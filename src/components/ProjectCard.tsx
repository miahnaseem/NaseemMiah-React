import type { Project } from '../lib/portfolio.ts'
import { formatMonth } from '../lib/repos.ts'
import { GitHubIcon, StarIcon } from './icons.tsx'
import SkillBadge from './SkillBadge.tsx'
import styles from './ProjectCard.module.css'

interface Props {
  project: Project
}

export default function ProjectCard ({ project }: Props) {
  const { title, summary, image, skills, tags, stars, updatedAt, repoUrl, links } = project

  return (
    <article className={styles.card}>
      {image && (
        <img className={styles.image} src={image.src} alt={image.alt} loading='lazy' decoding='async' />
      )}
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        {summary && <p className={styles.summary}>{summary}</p>}

        {(skills.length > 0 || tags.length > 0) && (
          <ul className={styles.chips} aria-label='Technologies'>
            {skills.map((s) => <li key={s}><SkillBadge skill={s} /></li>)}
            {tags.map((t) => <li key={t} className={styles.tag}>{t}</li>)}
          </ul>
        )}

        <footer className={styles.footer}>
          <div className={styles.meta}>
            {updatedAt && <span>Updated {formatMonth(updatedAt)}</span>}
            {stars > 0 && (
              <span className={styles.stars}>
                <StarIcon /> {stars}<span className='visually-hidden'> stars</span>
              </span>
            )}
          </div>
          <div className={styles.actions}>
            {links.map((l) => (
              <a key={l.href} className='button button--small' href={l.href} target='_blank' rel='noreferrer'>
                {l.label}
              </a>
            ))}
            <a
              className='button button--ghost button--small'
              href={repoUrl}
              target='_blank'
              rel='noreferrer'
              aria-label={`${title} source code on GitHub`}
            >
              <GitHubIcon /> Code
            </a>
          </div>
        </footer>
      </div>
    </article>
  )
}
