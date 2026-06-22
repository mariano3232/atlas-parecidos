import type { PhotoPlacement } from '../../data/images'
import { PhotoTile } from './PhotoTile'

type PhotoCollageProps = {
  photos: PhotoPlacement[]
  className?: string
  containerWidth?: string
  containerHeight?: string
  connectable?: boolean
  selectedIds?: string[]
  onSelect?: (id: string) => void
}

export function PhotoCollage({
  photos,
  className = '',
  containerWidth = '100%',
  containerHeight = '100%',
  connectable,
  selectedIds = [],
  onSelect,
}: PhotoCollageProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: containerWidth, height: containerHeight }}
    >
      {photos.map((photo) => (
        <PhotoTile
          key={`${photo.id}-${photo.left}-${photo.top}`}
          photo={photo}
          connectable={connectable}
          selected={selectedIds.includes(photo.id)}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}
