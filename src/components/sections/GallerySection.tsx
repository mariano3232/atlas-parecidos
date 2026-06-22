import { Section } from '../layout/Section'
import { DisplayText } from '../layout/DisplayText'
import { PhotoCollage } from '../collage/PhotoCollage'
import { galleryLayout } from '../../data/images'

export function GallerySection() {
  return (
    <Section id="galeria" className="border border-opinion-red/40 bg-white">
      <div className="relative h-full min-h-screen">
        <div className="absolute inset-x-0 top-[28%] h-[52%] px-4 md:px-8">
          <PhotoCollage photos={galleryLayout} containerHeight="100%" />
        </div>

        <div className="absolute inset-x-6 bottom-8 flex flex-col gap-4 md:inset-x-12 md:bottom-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-sm font-body text-sm tracking-wide text-ink md:text-base">
            Las semejanzas aparecen depende quien las este mirando.
          </p>
          <DisplayText as="h2" size="md" variant="serif" uppercase className="tracking-[0.05em]">
            No todos vemos lo mismo
          </DisplayText>
        </div>
      </div>
    </Section>
  )
}
