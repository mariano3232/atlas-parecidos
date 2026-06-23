import { createContext, useContext, useState, type ReactNode } from 'react'

type NavigationTransitionContextType = {
  overlayColor: string | null
  setOverlayColor: (color: string | null) => void
}

const NavigationTransitionContext = createContext<NavigationTransitionContextType | null>(null)

export function NavigationTransitionProvider({ children }: { children: ReactNode }) {
  const [overlayColor, setOverlayColor] = useState<string | null>(null)

  return (
    <NavigationTransitionContext.Provider value={{ overlayColor, setOverlayColor }}>
      {children}
    </NavigationTransitionContext.Provider>
  )
}

export function useNavigationTransition() {
  const context = useContext(NavigationTransitionContext)
  if (!context) {
    throw new Error('useNavigationTransition debe usarse dentro del Provider')
  }
  return context
}
