import { useActionState } from 'react'
import { useSearchParams } from 'react-router'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../components/icons.tsx'
import { profile } from '../data/profile.ts'
import styles from './Contact.module.css'

/** Must match the hidden form in index.html so Netlify registers it at deploy time. */
const FORM_NAME = 'contact'

const TOPICS = {
  general: 'Just saying hello',
  resume: 'Requesting my résumé',
  freelance: 'Freelance project',
  role: 'Job opportunity'
} as const

type Fields = Record<'name' | 'email' | 'topic' | 'message', string>

type Status =
  | { state: 'idle' }
  | { state: 'sent' }
  // Carries the submitted values so React's post-action form reset doesn't wipe them.
  | { state: 'error', message: string, values: Fields }

async function submitToNetlify (_prev: Status, form: FormData): Promise<Status> {
  form.set('form-name', FORM_NAME)
  const body = new URLSearchParams([...form.entries()].map(([k, v]) => [k, String(v)]))
  try {
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return { state: 'sent' }
  } catch {
    const values = Object.fromEntries(
      (['name', 'email', 'topic', 'message'] as const).map((k) => [k, String(form.get(k) ?? '')])
    ) as Fields
    return { state: 'error', values, message: `Sorry, that didn’t go through. You can email me at ${profile.email}.` }
  }
}

export default function Contact () {
  const [params] = useSearchParams()
  const [status, formAction, isPending] = useActionState(submitToNetlify, { state: 'idle' })
  const requestedTopic = params.get('topic') ?? 'general'
  const defaults: Fields = status.state === 'error'
    ? status.values
    : { name: '', email: '', topic: requestedTopic in TOPICS ? requestedTopic : 'general', message: '' }

  return (
    <div className={`container ${styles.layout}`}>
      <section className='fade-up'>
        <h1>Let’s talk</h1>
        <p className={styles.lede}>
          Have a role, a freelance project or feedback on the site? Send a message and I’ll get
          back to you, or ask for my résumé and I’ll send it over.
        </p>

        {status.state === 'sent'
          ? (
            <div className={styles.success} role='status'>
              <h2>Thanks, message received!</h2>
              <p>I’ll reply to the email address you gave as soon as I can.</p>
            </div>
            )
          : (
            <form className={styles.form} name={FORM_NAME} action={formAction}>
              {/* Honeypot: real visitors never see or fill this. */}
              <p className='visually-hidden' aria-hidden='true'>
                <label>Don’t fill this out: <input name='bot-field' tabIndex={-1} autoComplete='off' /></label>
              </p>

              <div className={styles.row}>
                <label className={styles.field}>
                  <span>Name</span>
                  <input name='name' required autoComplete='name' defaultValue={defaults.name} />
                </label>
                <label className={styles.field}>
                  <span>Email</span>
                  <input name='email' type='email' required autoComplete='email' defaultValue={defaults.email} />
                </label>
              </div>

              <label className={styles.field}>
                <span>What’s this about?</span>
                <select name='topic' defaultValue={defaults.topic}>
                  {Object.entries(TOPICS).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </label>

              <label className={styles.field}>
                <span>Message</span>
                <textarea name='message' rows={6} required defaultValue={defaults.message} />
              </label>

              {status.state === 'error' && <p className={styles.error} role='alert'>{status.message}</p>}

              <button className='button' type='submit' disabled={isPending}>
                {isPending ? 'Sending…' : 'Send message'}
              </button>
            </form>
            )}
      </section>

      <aside className={styles.aside}>
        <div className={styles.card}>
          <h2>Elsewhere</h2>
          <ul className={styles.links}>
            <li><MailIcon /> <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><LinkedInIcon /> <a href={profile.linkedin} target='_blank' rel='noreferrer'>LinkedIn</a></li>
            <li><GitHubIcon /> <a href={profile.github} target='_blank' rel='noreferrer'>GitHub</a></li>
          </ul>
        </div>
        <div className={styles.card}>
          <h2>Hire me as a freelancer</h2>
          <div className={styles.freelance}>
            {profile.freelance.map((f) => (
              <a key={f.label} className='button button--ghost button--small' href={f.href} target='_blank' rel='noreferrer'>
                {f.label}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}
