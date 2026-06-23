import { Section } from '../layout/Section'
import { DisplayText } from '../layout/DisplayText'
import { ScrollHint } from '../layout/ScrollHint'
import { imageSources } from '../../data/images'
import InteractImage from '../interaction/InteractImage'
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { InteractionContext } from '../interaction/InteractContext'
import { useNavigationTransition } from '../layout/NavigationTransitionContext'

function matchesCombination(selectedPoints: number[], combination: number[]) {
  const [point1, point2] = combination
  return (
    (point1 === selectedPoints[0] && point2 === selectedPoints[1]) ||
    (point2 === selectedPoints[0] && point1 === selectedPoints[1])
  )
}

const opinionRoutes: { combination: number[]; path: string; color: string }[] = [
  { combination: [1, 3], path: '/opinion-1', color: '#dd4141' },
  { combination: [2, 3], path: '/opinion-2', color: '#d5e2e8' },
  { combination: [1, 4], path: '/opinion-3', color: '#dd4141' },
  { combination: [5, 8], path: '/opinion-4', color: '#d5e2e8' },
]

const pointCombinations = [[1, 3], [2, 3], [1, 4], [5, 8], [6, 7], [8, 10], [9, 10]]
const SUCCESS_DELAY_MS = 700
const NAVIGATE_DELAY_MS = 1200

export function InteractionSection() {
  const navigate = useNavigate()
  const { setOverlayColor } = useNavigationTransition()
  const [connectionFound, setConnectionFound] = useState(false)
  const [selectedPoints, setSelectedPoints] = useState([0, 0])
  const navigationStarted = useRef(false)

  useEffect(() => {
    const connectionFoundAux = pointCombinations.some((combination) =>
      matchesCombination(selectedPoints, combination)
    )
    setConnectionFound(connectionFoundAux)

    if (!connectionFoundAux && selectedPoints[0] !== 0 && selectedPoints[1] !== 0) {
      const resetTimer = window.setTimeout(() => {
        setSelectedPoints([0, 0])
      }, 1000)
      return () => window.clearTimeout(resetTimer)
    }

    const matchedRoute = opinionRoutes.find(({ combination }) =>
      matchesCombination(selectedPoints, combination)
    )

    if (!matchedRoute || navigationStarted.current) return

    navigationStarted.current = true
    const colorTimer = window.setTimeout(() => {
      setOverlayColor(matchedRoute.color)
    }, SUCCESS_DELAY_MS)

    const navigateTimer = window.setTimeout(() => {
      navigate(matchedRoute.path, { state: { seamless: true } })
    }, NAVIGATE_DELAY_MS)

    return () => {
      window.clearTimeout(colorTimer)
      window.clearTimeout(navigateTimer)
    }
  }, [selectedPoints, navigate, setOverlayColor])

  return (
    <Section id="interaccion" className="bg-cream">
      <div className="relative flex h-full min-h-screen flex-col px-6 py-8 md:px-10">
        <div className='sticky top-5 z-11'>
          <div className="mb-4 flex items-start justify-between gap-6">
            <DisplayText size="lg" className="max-w-xl">
              ¿Qué ves?
            </DisplayText>
            <ScrollHint hint="(↓↓↓)" className="hidden md:block" />
          </div>

          <p className="mb-4 max-w-xs font-[CustomFont] text-sm leading-relaxed text-ink md:text-lg">
            Conectá (●) dos imágenes que compartan algo.
          </p>
          <Link
            to="/"
            className="inline-block w-fit border border-ink px-4 py-2 font-[CustomFont] text-lg text-ink shadow-[3px_3px_0_#141313] transition hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_#141313]"
          >
            ← Volver
          </Link>
        </div>
        

        <div className="relative min-h-0 flex-1">
          {/* <img src={imageSources['parecidos']} alt="" className='w-[70%] m-auto' /> */}
          <InteractionContext.Provider
            value={{ selectedPoints, setSelectedPoints, connectionFound }}
          >
          <div className='grid grid-cols-4 grid-rows-9 h-[2100px] w-[70%] m-auto gap-5'>
            <div/>
            <div/>
            <InteractImage src={imageSources['gallery-03-2']} size={2} pointId={1} pointPosition='top-[20%] left-[-30px]'  />
            <div/>
            <InteractImage src={imageSources['photo-16']} size={1} pointId={2} pointPosition='top-[30%] left-[-30px]'  />
            <InteractImage src={imageSources['img-0508']} size={2} pointId={3} pointPosition='top-[-40px] left-[10%]'  />
            <InteractImage src={imageSources['gallery-ce3f']} size={1} pointId={4} pointPosition='top-[30%] right-[-30px]'  />
            <div/>
            <div/>
            <div/>
            <div/>
            <InteractImage src={imageSources['photo-14']} size={1} pointId={5} pointPosition='bottom-[-40px] left-[35%]'  />
            <InteractImage src={imageSources['photo-7']} size={1} pointId={6} pointPosition='bottom-[30%] right-[-30px]'  />
            <div/>
            <div/>
            <div/>
            <InteractImage src={imageSources['photo-07']} size={2} pointId={7} pointPosition='right-[-40px] top-[45%]'  />
            <div/>
            <InteractImage src={imageSources['photo-22']} size={1} pointId={8} pointPosition='left-[-40px] top-[35%]'  />
            <InteractImage src={imageSources['04']} size={2} pointId={9} pointPosition='right-[-40px] top-[70%]'  />
            <InteractImage src={imageSources['05']} size={1} pointId={10} pointPosition='bottom-[-40px] left-[45%]'  />
            <div/>
            <div/>
            <div/>
          </div>
          </InteractionContext.Provider>
        </div>
      </div>
    </Section>
  )
}
