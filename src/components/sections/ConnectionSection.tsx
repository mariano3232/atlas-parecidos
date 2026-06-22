import { useState } from 'react'
import { Section } from '../layout/Section'
import { DisplayText } from '../layout/DisplayText'
import { ScrollHint } from '../layout/ScrollHint'
import { ConnectableGallery } from '../interaction/ConnectableGallery'
import { interactionLayout } from '../../data/images'
import { connectionStates } from '../../data/connections'

export function ConnectionSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = connectionStates[activeIndex]

  return (
    <Section id="conexiones" className="bg-cream">
      <div className="relative flex h-full min-h-screen flex-col px-6 py-8 md:px-10">
        <div className="mb-4 flex items-start justify-between gap-6">
          <DisplayText size="lg">¿Qué ves?</DisplayText>
          <ScrollHint hint="(↓↓↓)" className="hidden md:block" />
        </div>

        <p className="mb-4 max-w-md font-display text-sm leading-relaxed text-ink md:text-lg">
          Conectá (●) dos imágenes que compartan algo.
        </p>

        <div className="relative min-h-0 flex-1">
          <ConnectableGallery
            photos={interactionLayout}
            selectedIds={[active.fromId, active.toId]}
            onSelect={() => undefined}
            connectionFromId={active.fromId}
            connectionToId={active.toId}
            scrollable
            containerHeight="100%"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="font-body text-sm text-ink/80">{active.label}</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setActiveIndex((i) => (i === 0 ? connectionStates.length - 1 : i - 1))}
              className="rounded border border-ink px-3 py-1 font-body text-sm hover:bg-ink hover:text-cream"
            >
              Anterior
            </button>
            <button
              type="button"
              onClick={() => setActiveIndex((i) => (i + 1) % connectionStates.length)}
              className="rounded border border-ink px-3 py-1 font-body text-sm hover:bg-ink hover:text-cream"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}
