export type PhotoPlacement = {
  id: string
  src: string
  left: number
  top: number
  width: number
  height: number
  zIndex?: number
  rotate?: number
  alt?: string
  objectPosition?: string
}

const base = '/assets/images'

export const imageSources: Record<string, string> = {
  // 'hero-twins': `${base}/hero-twins.jpeg`,
  'hero-twins': `${base}/main.png`,
  'atlas-familiar': `${base}/atlas2.png`,
  'parecidos': `${base}/parecidos.png`,
  'img-0518': `${base}/img-0518.jpeg`,
  'img-f11e8b4c': `${base}/img-f11e8b4c.jpeg`,
  'img-0509': `${base}/img-0509.jpeg`,
  'img-0466': `${base}/img-0466.jpeg`,
  'img-42dcc1': `${base}/img-42dcc1.jpeg`,
  'photo-09': `${base}/photo-09.jpeg`,
  'photo-18': `${base}/photo-18.jpeg`,
  'photo-2f017d': `${base}/photo-2f017d.jpeg`,
  'img-0475': `${base}/img-0475.jpeg`,
  'img-0494': `${base}/img-0494.jpeg`,
  'img-0513': `${base}/img-0513.jpeg`,
  'img-0474': `${base}/img-0474.jpeg`,
  'imagen2': `${base}/imagen2.png`,
  'photo-13': `${base}/photo-13.jpeg`,
  'img-0459': `${base}/img-0459.jpeg`,
  'photo-04': `${base}/photo-04.jpeg`,
  'img-3257': `${base}/img-3257.jpeg`,
  'img-0512-3': `${base}/img-0512-3.jpeg`,
  'photo-22': `${base}/photo-22.jpeg`,
  'photo-01b': `${base}/photo-01b.jpeg`,
  'photo-16': `${base}/photo-16.jpeg`,
  'img-0508': `${base}/img-0508.jpeg`,
  'img-0499': `${base}/img-0499.jpeg`,
  'photo-7': `${base}/photo-7.jpg`,
  'photo-20': `${base}/photo-20.jpeg`,
  'photo-17': `${base}/photo-17.jpeg`,
  'photo-05': `${base}/photo-05.jpeg`,
  'photo-19': `${base}/photo-19.jpeg`,
  'photo-14': `${base}/photo-14.jpeg`,
  'photo-07': `${base}/photo-07.jpg`,
  'photo-5b72': `${base}/photo-5b72.jpeg`,
  'img-0510': `${base}/img-0510.jpeg`,
  'photo-04-4': `${base}/photo-04-4.png`,
  'photo-03': `${base}/photo-03.jpeg`,
  'photo-24': `${base}/photo-24.jpeg`,
  'img-0513-s': `${base}/img-0513-s.jpeg`,
  'photo-06': `${base}/photo-06.jpeg`,
  'gallery-04-2': `${base}/gallery-04-2.png`,
  'gallery-03': `${base}/gallery-03.png`,
  'gallery-03-2': `${base}/gallery-03-2.png`,
  'gallery-486d': `${base}/gallery-486d.jpeg`,
  'gallery-23': `${base}/gallery-23.jpeg`,
  'gallery-384f': `${base}/gallery-384f.jpeg`,
  'gallery-ce3f': `${base}/gallery-ce3f.jpeg`,
  'gallery-0463': `${base}/gallery-0463.jpeg`,
  'gallery-0518': `${base}/gallery-0518.jpeg`,
  'opinion-1': `${base}/opinion-1.jpeg`,
  'opinion-2': `${base}/opinion-2.jpeg`,
  'opinion-3': `${base}/opinion-3.jpeg`,
  'opinion-4': `${base}/opinion-4.jpeg`,
  'Opinion2-1': `${base}/Opinion2-1.png`,
  'Opinion2-2': `${base}/Opinion2-2.png`,
  'Opinion2-3': `${base}/Opinion2-3.png`,
  'Opinion3-1': `${base}/Opinion3-1.png`,
  'Opinion3-2': `${base}/Opinion3-2.png`,
  'Opinion3-3': `${base}/Opinion3-3.png`,
  'Opinion4-1': `${base}/Opinion4-1.png`,
  'Opinion4-2': `${base}/Opinion4-2.png`,
  'Opinion4-3': `${base}/Opinion4-3.png`,
  '04': `${base}/04.jpg`,
  '05': `${base}/05.jpg`,
}

function p(
  id: string,
  left: number,
  top: number,
  width: number,
  height: number,
  extra: Partial<PhotoPlacement> = {},
): PhotoPlacement {
  return {
    id,
    src: imageSources[id],
    left: (left / 1440) * 100,
    top: (top / 900) * 100,
    width: (width / 1440) * 100,
    height: (height / 900) * 100,
    ...extra,
  }
}

export const galleryLayout: PhotoPlacement[] = [
  p('img-0518', 204, 345, 64, 85, { zIndex: 5 }),
  p('img-f11e8b4c', 166, 255, 163, 120, { zIndex: 4 }),
  p('img-0509', 165, 427, 131, 175, { zIndex: 3 }),
  p('img-0466', 139, 399, 79, 101, { zIndex: 6 }),
  p('img-42dcc1', 319, 273, 145, 192, { zIndex: 5 }),
  p('photo-09', 831, 260, 138, 196, { zIndex: 4 }),
  p('photo-18', 622, 464, 190, 121, { zIndex: 3 }),
  p('photo-2f017d', 557, 299, 147, 232, { zIndex: 5 }),
  p('img-0475', 441, 491, 160, 90, { zIndex: 2 }),
  p('img-0494', 419, 285, 172, 109, { zIndex: 4 }),
  p('img-0513', 399, 486, 75, 138, { zIndex: 3, rotate: -90 }),
  p('img-0474', 654, 239, 229, 172, { zIndex: 6 }),
  p('imagen2', 775, 217, 132, 93, { zIndex: 5 }),
  p('photo-13', 907, 358, 163, 230, { zIndex: 4 }),
  p('img-0459', 812, 449, 191, 127, { zIndex: 3 }),
  p('photo-04', 758, 542, 137, 93, { zIndex: 2 }),
  p('img-3257', 1056, 292, 138, 184, { zIndex: 4 }),
  p('img-0512-3', 783, 449, 220, 142, { zIndex: 10 }),
  p('photo-22', 939, 285, 149, 92, { zIndex: 3 }),
  p('photo-01b', 687, 404, 144, 91, { zIndex: 4 }),
  p('photo-16', 1056, 265, 97, 73, { zIndex: 2 }),
  p('img-0508', 245, 375, 83, 111, { zIndex: 3 }),
  p('img-0499', 1185, 437, 157, 110, { zIndex: 4 }),
  p('photo-20', 148, 482, 111, 73, { zIndex: 2 }),
  p('photo-17', 1185, 309, 119, 149, { zIndex: 5 }),
  p('photo-05', 1273, 391, 110, 110, { zIndex: 4, objectPosition: 'center' }),
  p('photo-19', 112, 507, 66, 42, { zIndex: 2 }),
  p('photo-14', 404, 394, 191, 123, { zIndex: 5 }),
  p('photo-07', 526, 310, 109, 163, { zIndex: 4 }),
  p('photo-5b72', 253, 461, 171, 129, { zIndex: 3 }),
  p('img-0510', 399, 472, 70, 59, { zIndex: 2 }),
  p('photo-04-4', 92, 354, 112, 76, { zIndex: 3 }),
  p('photo-03', 883, 562, 77, 58, { zIndex: 2 }),
  p('photo-24', 601, 531, 82, 61, { zIndex: 3 }),
  p('img-0513-s', 557, 480, 52, 79, { zIndex: 2 }),
  p('photo-06', 532, 263, 63, 84, { zIndex: 4 }),
]

export const interactionLayout: PhotoPlacement[] = [
  p('gallery-04-2', 696, 3, 562, 568, { zIndex: 2 }),
  p('gallery-03', 113, 580, 565, 565, { zIndex: 3 }),
  p('gallery-486d', 697, 580, 280, 271, { zIndex: 4 }),
  p('gallery-23', 415, 1180, 268, 248, { zIndex: 2 }),
  p('gallery-384f', 406, 286, 270, 275, { zIndex: 3 }),
  p('gallery-ce3f', 708, 1180, 268, 248, { zIndex: 4 }),
  p('gallery-0463', 697, 1497, 561, 562, { zIndex: 2 }),
  p('gallery-0518', 408, 1787, 268, 272, { zIndex: 3 }),
  {
    ...p('gallery-486d', 687, 2077, 280, 271, { zIndex: 4 }),
    id: 'gallery-486d-2',
  },
  {
    ...p('gallery-04-2', 114, 2081, 562, 561, { zIndex: 2 }),
    id: 'gallery-04-3',
  },
]

export const atlasLayout: PhotoPlacement[] = galleryLayout.map((photo, index) => ({
  ...photo,
  left: photo.left * 2.8 + (index % 3) * 8,
  top: photo.top * 1.2 + (index % 5) * 3,
  zIndex: photo.zIndex,
}))

export function getPhotoCenter(photo: PhotoPlacement, containerWidth: number, containerHeight: number) {
  return {
    x: (photo.left / 100) * containerWidth + ((photo.width / 100) * containerWidth) / 2,
    y: (photo.top / 100) * containerHeight + ((photo.height / 100) * containerHeight) / 2,
  }
}
