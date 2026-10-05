import { useState } from 'react'
import { Link, NavLink, Outlet, ScrollRestoration } from 'react-router'
import logo from '../assets/nav-logo.png'
import { profile } from '../data/profile.ts'
import { GitHubIcon, LinkedInIcon } from './icons.tsx'
import styles from './Layout.module.css'

const NAV_ITEMS = [
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
]

export default function Layout () {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className={styles.skip} href='#main'>Skip to content</a>

      <header className={styles.header}>
        <nav className={`container ${styles.nav}`} aria-label='Main'>
          <Link to='/' className={styles.brand} onClick={closeMenu}>
            <img src={logo} alt='' className={styles.logo} width={84} height={47} />
            <span className='visually-hidden'>{profile.name}, home</span>
          </Link>

          <button
            type='button'
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls='site-menu'
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.menuIcon} aria-hidden='true' />
            <span className='visually-hidden'>Menu</span>
          </button>

          <ul id='site-menu' className={styles.links} data-open={menuOpen}>
            {NAV_ITEMS.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} onClick={closeMenu} className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id='main' className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <div className={styles.social}>
            <a href={profile.github} target='_blank' rel='noreferrer' aria-label='GitHub'><GitHubIcon /></a>
            <a href={profile.linkedin} target='_blank' rel='noreferrer' aria-label='LinkedIn'><LinkedInIcon /></a>
          </div>
        </div>
      </footer>

      <ScrollRestoration />
    </>
  )
}
