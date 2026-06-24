import type { ReactNode } from 'react'

type DisplayTextProps = {
  children: ReactNode
  as?: 'h1' | 'h2' | 'p' | 'span'
  className?: string
  size?: 'xl' | 'lg' | 'custom' | 'md' | 'sm'
  uppercase?: boolean
  variant?: 'display' | 'serif' | 'body'
}

const sizeClasses = {
  xl: 'text-[clamp(2rem,8vw,8.75rem)] leading-[1.15] font-light',
  lg: 'text-[clamp(1.75rem,5vw,4.125rem)] leading-[1.2]',
  custom:'text-[clamp(1.75rem,5vw,4rem)] leading-[68px]',
  md: 'text-[clamp(1.1rem,2.5vw,2.75rem)] leading-[1.3]',
  sm: 'text-[clamp(0.875rem,1.5vw,1.25rem)] leading-[1.5]',
}

export function DisplayText({
  children,
  as: Tag = 'p',
  className = '',
  size = 'lg',
  uppercase = true,
}: DisplayTextProps) {
  return (
    <Tag
      className={`text-ink font-[CustomFont] ${sizeClasses[size]} ${uppercase ? 'uppercase' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
