import { Section } from '../layout/Section'
import { DisplayText } from '../layout/DisplayText'
import { ScrollHint } from '../layout/ScrollHint'
import { PhotoCollage } from '../collage/PhotoCollage'
import { atlasLayout } from '../../data/images'
import { imageSources } from '../../data/images'
import ScrollContainer from 'react-indiana-drag-scroll'

export function AtlasSection() {
  return (
    
    <Section id="atlas" className="border border-ink bg-cream">
      <div className="relative flex h-full min-h-screen flex-col px-6 py-8 md:px-10">
        <div className="flex items-center justify-between">
          <div className="mb-4 items-start justify-between gap-6">
            <DisplayText size="lg">Atlas Familiar</DisplayText>
            <ScrollHint hint="(↓⇆)" className="hidden md:block" />
          </div>

          <p className="mb-6 max-w-xs font-display text-sm leading-relaxed text-ink md:text-xl">
            Las semejanza cambian según quién las mira...
          </p>
        </div>
        

        <ScrollContainer className="min-h-0 flex-1 overflow-x-auto overflow-y-hidden hide-scrollbar">
          <img src={imageSources['atlas-familiar']} alt="Atlas Familiar" className="min-w-[3000px] h-auto z-9" />
        </ScrollContainer>
      </div>
    </Section>
  )
}
