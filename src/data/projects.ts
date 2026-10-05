import cceSearch from '../assets/cce-search.png'
import chugg from '../assets/chugg.png'
import gedcomOutput from '../assets/gedcom-output.png'
import type { Skill } from '../lib/skills.ts'

export interface ProjectLink {
  label: string
  href: string
}

/** Hand-written extras layered on top of a GitHub repo, keyed by repo name. */
export interface RepoOverride {
  title?: string
  summary?: string
  image?: { src: string, alt: string }
  links?: ProjectLink[]
  featured?: boolean
}

export const repoOverrides: Record<string, RepoOverride> = {
  'Early-Prediction-of-Lithium-Ion-Battery-Cycle-Life': {
    title: 'Early Prediction of Lithium-Ion Battery Cycle Life',
    summary:
      'Independent capstone research predicting how many cycles a battery will last before it shows ' +
      'any capacity loss, building on Stanford’s battery cycle-life dataset (9.1% MAPE).',
    links: [{ label: 'Read the notebook', href: '/notebooks/battery-cycle-life.html' }],
    featured: true
  },
  SSW555_DRAIN: {
    title: 'GEDCOM File Analysis',
    summary:
      'Command-line Python tool, built by a five-person Agile team, that finds errors and anomalies in GEDCOM genealogy files.',
    image: { src: gedcomOutput, alt: 'Terminal output listing GEDCOM validation results' }
  },
  'NaseemMiah-React': {
    title: 'This website',
    summary:
      'React 19 + TypeScript portfolio built with Vite, containerised with Docker and deployed on Netlify. ' +
      'Projects are pulled from the GitHub API at build time.'
  },
  MyWorstCar: {
    title: '#MyWorstCar'
  }
}

/** Team projects that live under collaborators' GitHub accounts. */
export interface Collaboration {
  title: string
  summary: string
  image: { src: string, alt: string }
  repo: string
  skills: Skill[]
  tags: string[]
}

export const collaborations: Collaboration[] = [
  {
    title: 'CCE Search Prototype',
    summary:
      'Senior capstone: a search interface for NYPL’s Catalog of Copyright Entries, used to find ' +
      'literature that is no longer under copyright. I built the database and hosted the site for our client on AWS.',
    image: { src: cceSearch, alt: 'Copyright search interface next to a results page' },
    repo: 'https://github.com/tmitche2/cce-search-prototype',
    skills: ['Python'],
    tags: ['Pipenv', 'AWS']
  },
  {
    title: 'CHUGGED',
    summary: 'Web Programming final project: find drinks based on your preferences and what’s in your cabinet, with user accounts and drink submissions.',
    image: { src: chugg, alt: 'CHUGGED drink-finder front page' },
    repo: 'https://github.com/tmitche2/cs546',
    skills: [],
    tags: ['Node.js', 'JavaScript']
  }
]
