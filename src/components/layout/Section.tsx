import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  fullHeight?: boolean
}

export function Section({ id, children, className = '', fullHeight = true }: SectionProps) {
  return (
    <section
      id={id}
      className={`snap-section relative w-full ${fullHeight ? 'min-h-screen' : ''} ${className}`}
    >
      {children}
    </section>
  )
}
