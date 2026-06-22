type ScrollHintProps = {
  hint: string
  className?: string
}

export function ScrollHint({ hint, className = '' }: ScrollHintProps) {
  return (
    <p className={`font-display text-[clamp(1.5rem,3vw,3.9rem)] text-ink ${className}`}>
      {hint}
    </p>
  )
}
