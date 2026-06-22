import { Section } from '../layout/Section'
import { DisplayText } from '../layout/DisplayText'
import { imageSources } from '../../data/images'

export function ScrollIntro2() {
  return (
    <Section id="scroll-2" className="bg-off-white">
      <div className="relative flex h-full min-h-screen flex-col justify-between px-6 py-10 md:px-12">
        
        <DisplayText size="xl" className="text-center text-red-500">
          LAS SEMEJANZAS
        </DisplayText>
        <div className="mx-auto">
          <img
            src={imageSources['hero-twins']}
            alt="Dos niñas sonriendo"
            className="h-full w-full object-cover object-center grayscale-50"
          />
        </div>
        <DisplayText size="xl" className="text-center text-red-500">
          APARECEN SEGÚN
        </DisplayText>
        <DisplayText size="xl" className="self-end text-right text-red-500">
          QUIÉN MIRE.
        </DisplayText>
        
      </div>
    </Section>
  )
}
