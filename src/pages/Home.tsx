import type { CSSProperties } from 'react'
import { Link } from 'react-router'
import ProjectCard from '../components/ProjectCard.tsx'
import { skillColor } from '../components/SkillBadge.tsx'
import { ArrowIcon } from '../components/icons.tsx'
import { githubProjects, projectsWithSkill, snapshot } from '../lib/portfolio.ts'
import { formatMonth } from '../lib/repos.ts'
import { SKILL_BLURBS, SKILLS } from '../lib/skills.ts'
import styles from './Home.module.css'

const LATEST_COUNT = 3

export default function Home () {
  const featured = githubProjects.find((p) => p.featured)
  const latest = githubProjects.filter((p) => p !== featured).slice(0, LATEST_COUNT)

  return (
    <div className='container'>
      <section className={`${styles.hero} fade-up`}>
        <p className={styles.eyebrow}>Hi, I’m Naseem Miah</p>
        <h1 className={styles.headline}>
          I build data-driven software with <span>Python</span>, <span>React</span>,{' '}
          <span>TypeScript</span> and <span>Docker</span>.
        </h1>
        <p className={styles.lede}>
          Computer Science at Stevens Institute of Technology. I work across the stack, from
          data science notebooks and machine learning research to typed, containerised web apps.
        </p>
        <div className={styles.ctas}>
          <Link className='button' to='/projects'>See my projects <ArrowIcon /></Link>
          <Link className='button button--ghost' to='/contact'>Get in touch</Link>
        </div>
      </section>

      <section aria-labelledby='skills-heading' className={styles.section}>
        <h2 id='skills-heading' className={styles.sectionTitle}>What I work with</h2>
        <ul className={styles.skills}>
          {SKILLS.map((skill) => {
            const repos = projectsWithSkill(githubProjects, skill)
            return (
              <li key={skill} className={styles.skill} style={{ '--skill': skillColor(skill) } as CSSProperties}>
                <h3>{skill}</h3>
                <p>{SKILL_BLURBS[skill]}</p>
                <Link to={`/projects?skill=${skill}`} className={styles.skillLink}>
                  {repos.length} {repos.length === 1 ? 'project' : 'projects'}
                  {repos[0] && <span className={styles.skillLatest}> · latest: {repos[0].title}</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </section>

      {featured && (
        <section aria-labelledby='featured-heading' className={`${styles.section} ${styles.featured}`}>
          <div>
            <p className={styles.eyebrow}>Featured research</p>
            <h2 id='featured-heading'>{featured.title}</h2>
            <p>{featured.summary}</p>
          </div>
          <div className={styles.ctas}>
            {featured.links.map((l) => (
              <a key={l.href} className='button' href={l.href} target='_blank' rel='noreferrer'>{l.label}</a>
            ))}
            <a className='button button--ghost' href={featured.repoUrl} target='_blank' rel='noreferrer'>
              View on GitHub
            </a>
          </div>
        </section>
      )}

      <section aria-labelledby='latest-heading' className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 id='latest-heading' className={styles.sectionTitle}>Latest on GitHub</h2>
          <span className={styles.synced}>Synced {formatMonth(snapshot.generatedAt)}</span>
        </div>
        <div className={styles.grid}>
          {latest.map((p) => <ProjectCard key={p.key} project={p} />)}
        </div>
        <Link to='/projects' className={styles.more}>All projects <ArrowIcon /></Link>
      </section>
    </div>
  )
}
