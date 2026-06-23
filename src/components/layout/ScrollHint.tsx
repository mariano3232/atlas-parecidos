type ScrollHintProps = {
  hint: string
  className?: string
}

export function ScrollHint({ hint, className = '' }: ScrollHintProps) {
  return (
    <p className={`font-[CustomFont] text-6xl  text-ink ${className}`}>
      {hint}
    </p>
  )
}
