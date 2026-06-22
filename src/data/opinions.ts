export type Opinion = {
  id: string
  quote: string
  author: string
  imageId: string
  rotation?: number
}

export const opinions: Opinion[] = [
  {
    id: 'opinion-1',
    quote: 'Yo soy igual a mi madre, Pity se parece a la tía Nene',
    author: 'Caro (tía), 56',
    imageId: 'opinion-2',
    rotation: 2.6,
  },
  {
    id: 'opinion-2',
    quote: 'Carolina se parece a mamá, yo a la tía Coca',
    author: 'Pity (mamá), 55',
    imageId: 'opinion-1',
    rotation: -2.9,
  },
  {
    id: 'opinion-3',
    quote: 'Caro y la abuela Betty tienen los mismos labios',
    author: 'Pili (prima), 16',
    imageId: 'opinion-4',
    rotation: 2.4,
  },
  // {
  //   id: 'opinion-4',
  //   quote: 'Todos dicen que me parezco a papá, pero yo veo más a mi abuela',
  //   author: 'Luli (sobrina), 22',
  //   imageId: 'opinion-4',
  //   rotation: -2.5,
  // },
]
