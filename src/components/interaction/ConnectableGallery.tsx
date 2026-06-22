import { useEffect, useRef, useState } from 'react'
import type { PhotoPlacement } from '../../data/images'
import { getPhotoCenter } from '../../data/images'
import { PhotoCollage } from '../collage/PhotoCollage'
import { ConnectionLine } from './ConnectionLine'

type ConnectableGalleryProps = {
  photos: PhotoPlacement[]
  selectedIds: string[]
  onSelect: (id: string) => void
  connectionFromId?: string
  connectionToId?: string
  scrollable?: boolean
  containerHeight?: string
  containerWidth?: string
}

export function ConnectableGallery({
  photos,
  selectedIds,
  onSelect,
  connectionFromId,
  connectionToId,
  scrollable = false,
  containerHeight = '100%',
  containerWidth = '100%',
}: ConnectableGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [linePoints, setLinePoints] = useState<{ from: { x: number; y: number }; to: { x: number; y: number } } | null>(null)

  const fromId = connectionFromId ?? (selectedIds.length === 2 ? selectedIds[0] : undefined)
  const toId = connectionToId ?? (selectedIds.length === 2 ? selectedIds[1] : undefined)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !fromId || !toId) {
      setLinePoints(null)
      return
    }

    const fromPhoto = photos.find((p) => p.id === fromId)
    const toPhoto = photos.find((p) => p.id === toId)
    if (!fromPhoto || !toPhoto) {
      setLinePoints(null)
      return
    }

    const { width, height } = container.getBoundingClientRect()
    setLinePoints({
      from: getPhotoCenter(fromPhoto, width, height),
      to: getPhotoCenter(toPhoto, width, height),
    })
  }, [fromId, toId, photos, selectedIds])

  return (
    <div
      ref={containerRef}
      className={`relative ${scrollable ? 'overflow-y-auto hide-scrollbar' : 'overflow-hidden'}`}
      style={{ width: containerWidth, height: containerHeight }}
    >
      <PhotoCollage
        photos={photos}
        connectable
        selectedIds={selectedIds}
        onSelect={onSelect}
        containerWidth="100%"
        containerHeight={scrollable ? '220%' : '100%'}
      />
      {linePoints && <ConnectionLine from={linePoints.from} to={linePoints.to} />}
    </div>
  )
}
