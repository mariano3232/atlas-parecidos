type Point = { x: number; y: number }

type ConnectionLineProps = {
  from: Point
  to: Point
  className?: string
}

function buildWavyPath(from: Point, to: Point) {
  const midX = (from.x + to.x) / 2
  const midY = (from.y + to.y) / 2
  const offsetX = (to.y - from.y) * 0.15
  const offsetY = (from.x - to.x) * 0.1

  return `M ${from.x} ${from.y} Q ${midX + offsetX} ${midY + offsetY} ${to.x} ${to.y}`
}

export function ConnectionLine({ from, to, className = '' }: ConnectionLineProps) {
  const path = buildWavyPath(from, to)

  return (
    <svg className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}>
      <path d={path} fill="none" stroke="#141313" strokeWidth="2" strokeLinecap="round" />
      <circle cx={from.x} cy={from.y} r="8" fill="#141313" />
      <circle cx={to.x} cy={to.y} r="8" fill="#141313" />
    </svg>
  )
}
