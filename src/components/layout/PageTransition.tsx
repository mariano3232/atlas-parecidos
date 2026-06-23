import { useEffect, useLayoutEffect, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useLocation } from 'react-router-dom'
import { useNavigationTransition } from './NavigationTransitionContext'

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
}

type PageTransitionProps = {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation()
  const { setOverlayColor } = useNavigationTransition()
  const seamless = Boolean((location.state as { seamless?: boolean } | null)?.seamless)

  useLayoutEffect(() => {
    scrollToTop()
  }, [location.pathname])

  useEffect(() => {
    if (seamless) {
      const clearTimer = window.setTimeout(() => setOverlayColor(null), 300)
      return () => window.clearTimeout(clearTimer)
    }
  }, [seamless, setOverlayColor])

  return (
    <motion.div
      initial={{ opacity: seamless ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: seamless ? 1 : 0 }}
      transition={{ duration: seamless ? 0.2 : 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function NavigationOverlay() {
  const { overlayColor } = useNavigationTransition()

  return (
    <AnimatePresence>
      {overlayColor && (
        <motion.div
          key="navigation-overlay"
          className="pointer-events-none fixed inset-0 z-[100]"
          style={{ backgroundColor: overlayColor }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </AnimatePresence>
  )
}
