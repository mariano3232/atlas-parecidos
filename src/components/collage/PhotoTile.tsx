import type { PhotoPlacement } from '../../data/images'

type PhotoTileProps = {
  photo: PhotoPlacement
  selected?: boolean
  connectable?: boolean
  onSelect?: (id: string) => void
}

export function PhotoTile({ photo, selected, connectable, onSelect }: PhotoTileProps) {
  const Component = connectable ? 'button' : 'div'

  return (
    <Component
      type={connectable ? 'button' : undefined}
      data-photo-id={photo.id}
      onClick={connectable ? () => onSelect?.(photo.id) : undefined}
      className={`absolute overflow-hidden ${connectable ? 'cursor-pointer transition ring-offset-2 hover:ring-2 hover:ring-ink/30' : ''} ${selected ? 'ring-2 ring-ink' : ''}`}
      style={{
        left: `${photo.left}%`,
        top: `${photo.top}%`,
        width: `${photo.width}%`,
        height: `${photo.height}%`,
        zIndex: photo.zIndex ?? 1,
        transform: photo.rotate ? `rotate(${photo.rotate}deg)` : undefined,
      }}
    >
      <img
        src={photo.src}
        alt={photo.alt ?? ''}
        className="h-full w-full object-cover"
        style={{ objectPosition: photo.objectPosition }}
        draggable={false}
      />
    </Component>
  )
}
