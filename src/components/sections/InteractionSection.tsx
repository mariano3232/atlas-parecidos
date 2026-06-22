import { Section } from '../layout/Section'
import { DisplayText } from '../layout/DisplayText'
import { ScrollHint } from '../layout/ScrollHint'
import { ConnectableGallery } from '../interaction/ConnectableGallery'
import { interactionLayout } from '../../data/images'
import { imageSources } from '../../data/images'
import { useImageConnection } from '../../hooks/useImageConnection'
import InteractImage from '../interaction/Image'

export function InteractionSection() {
  const { selectedIds, toggleSelection } = useImageConnection()

  return (
    <Section id="interaccion" className="bg-cream">
      <div className="relative flex h-full min-h-screen flex-col px-6 py-8 md:px-10">
        <div className="mb-4 flex items-start justify-between gap-6">
          <DisplayText size="lg" className="max-w-xl">
            ¿Qué ves?
          </DisplayText>
          <ScrollHint hint="(↓↓↓)" className="hidden md:block" />
        </div>

        <p className="mb-4 max-w-xs font-display text-sm leading-relaxed text-ink md:text-lg">
          Conectá (●) dos imágenes que compartan algo.
        </p>

        <div className="relative min-h-0 flex-1">
          {/* <img src={imageSources['parecidos']} alt="" className='w-[70%] m-auto' /> */}

          <div className='grid grid-cols-4 grid-rows-9 h-[2100px] w-[70%] m-auto gap-5'>
            <div className='h-full w-full'/>
            <div className='h-full w-full'/>
            <InteractImage src={imageSources['gallery-03-2']} size={2} pointPosition='top-[20%] left-[-30px]'/>
            <div className='h-full w-full'/>
            <InteractImage src={imageSources['photo-16']} size={1} pointPosition='top-[30%] left-[-30px]'/>
            <InteractImage src={imageSources['img-0508']} size={2} pointPosition='top-[-40px] left-[10%]'/>
            <InteractImage src={imageSources['gallery-ce3f']} size={1} pointPosition='top-[30%] right-[-30px]'/>
            <div className='h-full w-full'/>
            <div className='h-full w-full'/>
            <div className='h-full w-full'/>
            <div className='h-full w-full'/>
            <InteractImage src={imageSources['photo-14']} size={1} pointPosition='bottom-[-40px] left-[35%]'/>
            <InteractImage src={imageSources['photo-7']} size={1} pointPosition='bottom-[30%] right-[-30px]'/>
            <div className='h-full w-full'/>
            <div className='h-full w-full'/>
            <div className='h-full w-full'/>
            <InteractImage src={imageSources['photo-07']} size={2} pointPosition='right-[-40px] top-[45%]'/>
            <div className='h-full w-full'/>
            <InteractImage src={imageSources['photo-22']} size={1} pointPosition='left-[-40px] top-[35%]'/>
            <InteractImage src={imageSources['04']} size={2} pointPosition='right-[-40px] top-[70%]'/>
            <InteractImage src={imageSources['05']} size={1} pointPosition='bottom-[-40px] left-[45%]'/>
            <div className='h-full w-full'/>
            <div className='h-full w-full'/>
            <div className='h-full w-full'/>
          </div>

        </div>

        {selectedIds.length === 2 && (
          <p className="mt-4 text-center font-body text-sm text-ink/70">
            Conexión creada. Seguí bajando para ver más ejemplos.
          </p>
        )}
      </div>
    </Section>
  )
}
