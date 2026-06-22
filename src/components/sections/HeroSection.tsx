import { motion, useScroll, useTransform } from 'motion/react'
import { Section } from '../layout/Section'
import { DisplayText } from '../layout/DisplayText'
import { imageSources } from '../../data/images'
import ScrollContainer from 'react-indiana-drag-scroll'
import { ScrollHint } from '../layout/ScrollHint'

export function HeroSection() {
  const { scrollY } = useScroll()

  // Baja la imagen

  // La achica progresivamente
  const scale = useTransform(scrollY, [0, 1500], [1, 0.3])
  const opacity = useTransform(scrollY, [2000, 2300], [1, 0])

  return (
    <Section id="inicio" className="relative bg-[#faf5e6] bg-linear-to-b from-amber-50 to-teal-50">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.img
          src={imageSources['hero-twins']}
          alt="Dos niñas sonriendo"
          className=" w-screen object-cover"
          style={{
            scale,
            transformOrigin: 'center center',
            opacity,
          }}
        />
      </div>
      <div className="absolute top-0 z-10 flex h-screen w-screen min-h-screen flex-col justify-between px-6 py-8 md:px-12 md:py-10">
        <DisplayText
          size="xl"
          className="max-w-[95%] flex justify-between text-off-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
        >
          <span>NO</span>
          <span className='font-[CustomFont] '>TODOS</span>
          <span>VEMOS</span>
        </DisplayText>

        <DisplayText
          size="xl"
          className="max-w-[95%] flex justify-between text-off-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
        >
          <span>LO</span>
          <span>MISMO</span>
        </DisplayText>
      </div>

      <div className='my-20'/>

      <div className="relative z-10 flex h-full min-h-screen flex-col justify-between px-6 py-8 md:px-12 md:py-10">
        <DisplayText
          size="xl"
          className="max-w-[95%] flex justify-between text-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
        >
          <span>NO</span>
          <span>TODOS</span>
          <span>VEMOS</span>
        </DisplayText>

        <DisplayText
          size="xl"
          className="max-w-[95%] flex justify-between text-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
        >
          <span>LO</span>
          <span>MISMO</span>
        </DisplayText>
      </div>

      <div className='my-20'/>

      <div className="relative z-10 flex h-full min-h-screen flex-col justify-between px-6 py-8 md:px-12 md:py-10">
        <DisplayText
          size="xl"
          className="max-w-[95%] flex justify-between text-red-600 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
        >
          <span>LAS</span>
          <span>SEMEJANZAS</span>
          
        </DisplayText>
        <DisplayText
          size="xl"
          className="max-w-[95%] flex justify-between text-red-600 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
        >
          <span>APARECEN</span>
          <span>SEGÚN</span>
        </DisplayText>
        <DisplayText
          size="xl"
          className="max-w-[95%] flex justify-between text-red-600 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
        >
          
          <span>QUIÉN</span>
          <span>MIRE</span>
        </DisplayText>
      </div>
      
      <div className="relative flex h-full min-h-screen flex-col px-6 py-8 md:px-10">
        <div className="flex items-center justify-between">
          <div className="mb-4 items-start justify-between gap-6">
            <DisplayText size="lg">Atlas Familiar</DisplayText>
            <ScrollHint hint="(↓⇆)" className="hidden md:block relative top-10" />
          </div>

          <p className="mb-6 max-w-xs font-display text-sm leading-relaxed text-ink md:text-xl">
            Las semejanza cambian según quién las mira...
          </p>
        </div>
        <ScrollContainer className="max-h-[500px] flex-1 overflow-x-auto overflow-y-auto hide-scrollbar">
          <img src={imageSources['atlas-familiar']} alt="Atlas Familiar" className="min-w-[3000px] h-auto z-9" />
          <ScrollHint hint="(↓⇆)" className="hidden md:block absolute bottom-10 right-10" />
        </ScrollContainer>
      </div>

    </Section>
  )
}