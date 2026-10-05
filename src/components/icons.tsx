import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base: IconProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': true,
  focusable: false
}

export function GitHubIcon (props: IconProps) {
  return (
    <svg viewBox='0 0 16 16' {...base} {...props}>
      <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z' />
    </svg>
  )
}

export function LinkedInIcon (props: IconProps) {
  return (
    <svg viewBox='0 0 16 16' {...base} {...props}>
      <path d='M0 1.15C0 .52.52 0 1.17 0h13.66C15.48 0 16 .52 16 1.15v13.7c0 .63-.52 1.15-1.17 1.15H1.17C.52 16 0 15.48 0 14.85V1.15zM4.94 13.4V6.17h-2.4v7.23h2.4zM3.74 5.18c.84 0 1.36-.55 1.36-1.25-.02-.71-.52-1.25-1.35-1.25-.82 0-1.36.54-1.36 1.25 0 .7.52 1.25 1.33 1.25h.02zm4.93 8.22V9.36c0-.21.02-.43.08-.58.17-.43.57-.88 1.23-.88.87 0 1.21.66 1.21 1.63v3.87h2.4V9.25c0-2.22-1.18-3.25-2.76-3.25-1.27 0-1.84.7-2.16 1.2v.02h-.01l.01-.02V6.17h-2.4c.03.68 0 7.23 0 7.23h2.4z' />
    </svg>
  )
}

export function MailIcon (props: IconProps) {
  return (
    <svg viewBox='0 0 24 24' {...base} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' {...props}>
      <rect x='2' y='4' width='20' height='16' rx='2' />
      <path d='m22 7-10 6L2 7' />
    </svg>
  )
}

export function StarIcon (props: IconProps) {
  return (
    <svg viewBox='0 0 16 16' {...base} {...props}>
      <path d='M8 .25a.75.75 0 01.67.42l1.88 3.8 4.2.61a.75.75 0 01.41 1.28l-3.04 2.96.72 4.18a.75.75 0 01-1.09.79L8 12.33l-3.75 1.97a.75.75 0 01-1.09-.79l.72-4.18L.84 6.37a.75.75 0 01.41-1.28l4.2-.61L7.33.67A.75.75 0 018 .25z' />
    </svg>
  )
}

export function ArrowIcon (props: IconProps) {
  return (
    <svg viewBox='0 0 24 24' {...base} fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' {...props}>
      <path d='M5 12h14M13 6l6 6-6 6' />
    </svg>
  )
}
