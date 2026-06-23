import { Link } from 'react-router-dom'

export function OpinionBackButton() {
  return (
    <Link
      to="/interaction"
      className="inline-block w-fit border border-ink px-4 py-2 font-[CustomFont] text-lg text-ink shadow-[3px_3px_0_#141313] transition hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_#141313]"
    >
      ← Volver
    </Link>
  )
}
