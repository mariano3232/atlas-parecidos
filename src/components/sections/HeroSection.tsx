import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Section } from '../layout/Section'
import { DisplayText } from '../layout/DisplayText'
import { imageSources } from '../../data/images'
import ScrollContainer from 'react-indiana-drag-scroll'
import { ScrollHint } from '../layout/ScrollHint'
import { useNavigate } from 'react-router-dom'
import EssayButton from '../layout/EssayButton'

export function HeroSection() {
  const navigate = useNavigate()
  const atlasRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const { scrollYProgress: atlasProgress } = useScroll({
    target: atlasRef,
    offset: ['start end', 'center center'],
  })

  // Achica más rápido al principio y más lento al final: curva ease-out
  // Usamos una función personalizada para el mapeo no lineal del scale.
  const scale = useTransform(scrollY, [0, 1500], [1, 0.3], {
    ease: t => 1 - Math.pow(1 - t, 2), // easeOutQuad: rápido al principio, lento al final
  })
  const opacity = useTransform(scrollY, [2100, 2300], [1, 0])
  const heroTextColor = useTransform(scrollY, [0, 500], ['#f3eeee', '#141313'])
  const backgroundColor = useTransform(
    scrollY,
    [0, 1500, 3200],
    ['#F3EEEE', '#D5E2E8', '#FFFFFF'],
  )

  const atlasScale = useTransform(atlasProgress, [0, 1], [0.5, 1], {
    ease: t => 1 - Math.pow(1 - t, 3),
  })
  const atlasOpacity = useTransform(atlasProgress, [0, 0.45, 1], [0.2, 0.75, 1])
  const atlasY = useTransform(atlasProgress, [0, 1], [300, 0], {
    ease: t => 1 - Math.pow(1 - t, 2),
  })

  return (
    <Section id="inicio" className="relative">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundColor }}
      />
      <div className='h-[200vh]'>
        <div className="fixed top-0 h-screen flex items-center justify-center">
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
        <motion.div
          className="sticky top-0 z-10 flex h-screen w-screen min-h-screen flex-col justify-between px-6 py-8 md:px-12 md:py-10"
          style={{ color: heroTextColor }}
        >
          <DisplayText
            size="xl"
            className="w-[95%] mx-auto flex justify-between text-inherit!"
          >
            <span>NO</span>
            <span className='font-[CustomFont] '>TODOS</span>
            <span>VEMOS</span>
          </DisplayText>

          <DisplayText
            size="xl"
            className="w-[95%] mx-auto flex justify-between text-inherit!"
          >
            <span>LO</span>
            <span>MISMO</span>
          </DisplayText>
        </motion.div>
      </div>
      <div className='my-20'/>

      <div className='my-20'/>

      <div className="relative z-10 flex h-full min-h-screen flex-col justify-between px-6 py-8 md:px-12 md:py-10">
        <DisplayText
          size="xl"
          className="w-[95%] mx-auto flex justify-between text-opinion-red"
        >
          <span>LAS</span>
          <span>SEMEJANZAS</span>
          
        </DisplayText>
        <DisplayText
          size="xl"
          className="w-[95%] mx-auto flex justify-between text-opinion-red"
        >
          <span>APARECEN</span>
          <span>SEGÚN</span>
        </DisplayText>
        <DisplayText
          size="xl"
          className="w-[95%] mx-auto flex justify-between text-opinion-red"
        >
          
          <span>QUIÉN</span>
          <span>MIRE</span>
        </DisplayText>
      </div>
      
      <div
        ref={atlasRef}
        className="relative flex h-full min-h-screen flex-col py-8 md:px-10"
        style={{ perspective: '1200px' }}
      >
        
        <ScrollContainer className="max-h-[750px] flex-1 overflow-x-auto overflow-y-auto hide-scrollbar">
          <div className="z-10 sticky top-30 my-10 left-0 flex  justify-between">
            <div className="mb-4 items-start justify-between gap-6">
              <DisplayText size="lg">Atlas Familiar</DisplayText>
              <ScrollHint hint="(↓⇆)" className="hidden md:block relative top-40" />
            </div>

            <p className="max-w-[250px] font-[CustomFont] text-2xl leading-relaxed text-ink">
              Las semejanzas cambian según quién las mira...
            </p>
          </div>
          <motion.img
            onClick={() => navigate('/interaction')}
            src={imageSources['atlas-familiar']}
            alt="Atlas Familiar"
            className="min-w-[3000px] h-auto z-9"
            style={{
              scale: atlasScale,
              opacity: atlasOpacity,
              y: atlasY,
              transformOrigin: 'center center',
            }}
          />
        </ScrollContainer>
      </div>

    </Section>
  )
}