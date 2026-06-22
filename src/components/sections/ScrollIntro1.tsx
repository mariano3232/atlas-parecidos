import { Section } from '../layout/Section'
import { DisplayText } from '../layout/DisplayText'
import { imageSources } from '../../data/images'

export function ScrollIntro1() {
  return (
    <Section id="scroll-1" className="bg-off-white">
      <div className="flex h-full min-h-screen flex-col items-center justify-center px-6 py-10">
        <div className="relative mb-8 w-full max-w-4xl">
          <img
            src={imageSources['hero-twins']}
            alt="Retrato de dos niñas"
            className="mx-auto h-auto w-[62%] max-w-xl object-cover grayscale"
          />
        </div>

        <div className="absolute inset-x-4 top-6 flex justify-between gap-2 sm:inset-x-6 sm:top-8 md:inset-x-12 md:top-10">
          <DisplayText size="xl" uppercase className="text-ink text-[clamp(1.25rem,5vw,4rem)]">
            <span className="block">NO</span>
          </DisplayText>
          <DisplayText size="xl" uppercase className="text-ink text-[clamp(1.25rem,5vw,4rem)]">
            <span className="block">TODOS</span>
          </DisplayText>
          <DisplayText size="xl" uppercase className="text-ink text-[clamp(1.25rem,5vw,4rem)]">
            <span className="block">VEMOS</span>
          </DisplayText>
        </div>

        <div className="absolute inset-x-4 bottom-6 flex justify-between gap-2 sm:inset-x-6 sm:bottom-8 md:inset-x-12 md:bottom-10">
          <DisplayText size="xl" uppercase className="text-ink text-[clamp(1.25rem,5vw,4rem)]">
            <span className="block">LO</span>
          </DisplayText>
          <DisplayText size="xl" uppercase className="text-ink text-[clamp(1.25rem,5vw,4rem)]">
            <span className="block">MISMO</span>
          </DisplayText>
        </div>
      </div>
    </Section>
  )
}
