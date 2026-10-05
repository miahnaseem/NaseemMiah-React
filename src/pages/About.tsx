import { Link } from 'react-router'
import stevensLogo from '../assets/stevens-logo.jpg'
import styles from './About.module.css'

const SERVICES = [
  { title: 'Data & ML', body: 'Exploratory analysis, modelling and clear write-ups in Python and Jupyter.' },
  { title: 'Front ends', body: 'Accessible, responsive React + TypeScript interfaces.' },
  { title: 'Shipping it', body: 'Docker images, CI and hosting on Netlify or AWS, plus the SEO basics.' }
]

export default function About () {
  return (
    <div className={`container ${styles.layout}`}>
      <section className={`${styles.intro} fade-up`}>
        <h1>About me</h1>
        <p>
          I’m a developer who enjoys problems that sit between data and the web. My capstone
          research looked at predicting lithium-ion battery cycle life before batteries show any
          wear, and I’ve built everything from a GEDCOM genealogy validator to the React +
          TypeScript site you’re reading now.
        </p>
        <p>
          I’m looking for software development roles and freelance work where I can turn messy data into tools people
          actually use. Browse my <Link to='/projects'>projects</Link>, or{' '}
          <Link to='/contact?topic=resume'>request a copy of my résumé</Link>.
        </p>

        <h2 className={styles.subhead}>How I can help</h2>
        <ul className={styles.services}>
          {SERVICES.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <aside className={styles.aside}>
        <div className={styles.card}>
          <img src={stevensLogo} alt='Stevens Institute of Technology logo' className={styles.logo} loading='lazy' />
          <h2>Education</h2>
          <p>B.S. Computer Science<br />Stevens Institute of Technology</p>
        </div>

        <figure className={`${styles.card} ${styles.quote}`}>
          <blockquote>“Forty-two.”</blockquote>
          <figcaption>Deep Thought, <cite>The Hitchhiker’s Guide to the Galaxy</cite></figcaption>
        </figure>

        <div className={styles.card}>
          <h2>Birthday trivia</h2>
          <p>
            I was born on October 17. On that date in 1996, Hubble photographed the Cartwheel galaxy.
          </p>
          <a href='https://science.nasa.gov/mission/hubble/multimedia/what-did-hubble-see-on-your-birthday/' target='_blank' rel='noreferrer'>
            Find your birthday picture →
          </a>
        </div>
      </aside>
    </div>
  )
}
