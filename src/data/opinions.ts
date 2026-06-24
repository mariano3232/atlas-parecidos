export type Opinion = {
  id: string
  quote: string
  author: string
  imageId: string
  rotation?: number
}

export type OpinionTheme = 'red' | 'blue'

export type OpinionSet = {
  theme: OpinionTheme
  opinions: Opinion[]
}

export type OpinionVariant = 1 | 2 | 3 | 4 | 5 | 6

export const opinionSets: Record<OpinionVariant, OpinionSet> = {
  1: {
    theme: 'red',
    opinions: [
      {
        id: 'opinion-1',
        quote: 'Pity se parece a la tía Nene',
        author: 'Caro (tía), 58',
        imageId: 'opinion-2',
        rotation: 2.6,
      },
      {
        id: 'opinion-2',
        quote: 'Yo me parezco a la tía Coca',
        author: 'Pity (mamá), 56',
        imageId: 'opinion-1',
        rotation: -2.9,
      },
      {
        id: 'opinion-3',
        quote: 'Caro y la abuela Betty tienen los mismos labios',
        author: 'Pili (prima), 16',
        imageId: '04',
        rotation: 2.4,
      },
    ],
  },
  2: {
    theme: 'blue',
    opinions: [
      {
        id: 'opinion-1',
        quote: 'Malena es muy parecida a la tía carolina',
        author: ' Piti (mamá) , 55',
        imageId: 'Opinion2-1',
        rotation: 2.6,
      },
      {
        id: 'opinion-2',
        quote: 'Malena se parece a la abuela Betty',
        author: 'Caro (tía), 56',
        imageId: 'Opinion2-2',
        rotation: -2.9,
      },
      {
        id: 'opinion-3',
        quote: 'Pili se parece a Malena cuando era chica',
        author: 'Ana (tía), 53',
        imageId: 'Opinion2-3',
        rotation: 2.4,
      },
    ],
  },
  3: {
    theme: 'red',
    opinions: [
      {
        id: 'opinion-1',
        quote: 'Joaquin no se parece a nadie',
        author: 'Caro (tía), 56',
        imageId: 'Opinion3-1',
        rotation: -2.87,
      },
      {
        id: 'opinion-2',
        quote: 'Para mí, papá y Joaquin de chicos se parecían',
        author: 'Pili (prima), 16',
        imageId: 'Opinion3-2',
        rotation: 2.67,
      },
      {
        id: 'opinion-3',
        quote: 'Yo me parezco a los tulio',
        author: 'Joaquin (primo), 16',
        imageId: 'Opinion3-3',
        rotation: -2.38,
      },
    ],
  },
  4: {
    theme: 'blue',
    opinions: [
      {
        id: 'opinion-1',
        quote: 'Yo salí a los Destri',
        author: 'Tulo (tío), 53',
        imageId: 'Opinion4-1',
        rotation: -2.87,
      },
      {
        id: 'opinion-2',
        quote: 'Papá y la pity son iguales',
        author: 'Toto (primo), 20',
        imageId: 'Opinion4-2',
        rotation: 2.67,
      },
      {
        id: 'opinion-3',
        quote: 'Para mi, el Tulo se parece a su abuela',
        author: 'Abuela Bety, 87',
        imageId: 'Opinion4-3',
        rotation: -2.38,
      },
    ],
  },
  5: {
    theme: 'red',
    opinions: [
      {
        id: 'opinion-1',
        quote: 'Carolina es Alza, salio a nosotros',
        author: 'Bety (abuela), 87',
        imageId: 'Opinion5-1',
        rotation: -2.87,
      },
      {
        id: 'opinion-2',
        quote: 'Carolina se parece a mamá',
        author: 'Pity (mamá), 56',
        imageId: 'Opinion5-2',
        rotation: 2.67,
      },
      {
        id: 'opinion-3',
        quote: 'Carolina tiene las manos de papá',
        author: 'Tulo (tío), 53',
        imageId: 'Opinion5-3',
        rotation: -2.38,
      },
    ],
  },
  6: {
    theme: 'blue',
    opinions: [
      {
        id: 'opinion-1',
        quote: 'Tenemos la boca parecida',
        author: 'Joaquin (primo), 16',
        imageId: 'Opinion6-1',
        rotation: -2.87,
      },
      {
        id: 'opinion-2',
        quote: 'Malena sonrie como Tulio',
        author: 'Ana (tía), 53',
        imageId: 'Opinion6-2',
        rotation: 2.67,
      },
      {
        id: 'opinion-3',
        quote: 'Joaquin es mas Alza, es alto, nosotros no',
        author: 'Tulo (tío), 53',
        imageId: 'Opinion6-3',
        rotation: -2.38,
      },
    ],
  },
}

const themeClasses: Record<OpinionTheme, { section: string; card: string }> = {
  red: { section: 'bg-opinion-red', card: 'bg-opinion-red' },
  blue: { section: 'bg-opinion-blue', card: 'bg-opinion-blue' },
}

export function getOpinionSet(variant: OpinionVariant) {
  return {
    ...opinionSets[variant],
    classes: themeClasses[opinionSets[variant].theme],
  }
}
