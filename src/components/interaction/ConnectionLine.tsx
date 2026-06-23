type Point = { x: number; y: number }

type ConnectionLineProps = {
  from: Point
  to: Point
  className?: string
  showEndpoints?: boolean
}

function buildWavyPath(from: Point, to: Point) {
  const midX = (from.x + to.x) / 2
  const midY = (from.y + to.y) / 2
  const offsetX = (to.y - from.y) * 0.35
  const offsetY = (from.x - to.x) * 0.3

  return `M ${from.x} ${from.y} Q ${midX + offsetX} ${midY + offsetY} ${to.x} ${to.y}`
}

export function ConnectionLine({ from, to, className = '', showEndpoints = true }: ConnectionLineProps) {
  const path = buildWavyPath(from, to)

  return (
    <svg className={`pointer-events-none absolute inset-0 h-full w-full z-20 ${className}`}>
      <path d={path} fill="none" stroke="#141313" strokeWidth="2" strokeLinecap="round" />
      {showEndpoints && (
        <>
          <circle cx={from.x} cy={from.y} r="8" fill="#141313" />
          <circle cx={to.x} cy={to.y} r="8" fill="#141313" />
        </>
      )}
    </svg>
  )
}
