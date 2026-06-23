// InteractionContext.tsx
import { createContext, useContext } from 'react'

type InteractionContextType = {
  selectedPoints: number[]
  setSelectedPoints: React.Dispatch<React.SetStateAction<number[]>>
  connectionFound: boolean
}

export const InteractionContext = createContext<InteractionContextType | null>(null)

export function useInteraction() {
  const context = useContext(InteractionContext)

  if (!context) {
    throw new Error('useInteraction debe usarse dentro del Provider')
  }

  return context
}