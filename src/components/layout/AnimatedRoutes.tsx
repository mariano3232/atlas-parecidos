import { AnimatePresence } from 'motion/react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { PageTransition, NavigationOverlay } from './PageTransition'
import { NavigationTransitionProvider } from './NavigationTransitionContext'
import { HeroSection } from '../sections/HeroSection'
import { InteractionSection } from '../sections/InteractionSection'
import { OpinionSection } from '../sections/OpinionSection'
import type { OpinionVariant } from '../../data/opinions'

function HomePage() {
  return (
    <main>
      <HeroSection />
    </main>
  )
}

function OpinionPage({ variant }: { variant: OpinionVariant }) {
  return (
    <main>
      <OpinionSection variant={variant} />
    </main>
  )
}

export function AnimatedRoutes() {
  const location = useLocation()

  return (
    <NavigationTransitionProvider>
      <NavigationOverlay />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="/interaction"
            element={
              <PageTransition>
                <InteractionSection />
              </PageTransition>
            }
          />
          <Route
            path="/opinion-1"
            element={
              <PageTransition>
                <OpinionPage variant={1} />
              </PageTransition>
            }
          />
          <Route
            path="/opinion-2"
            element={
              <PageTransition>
                <OpinionPage variant={2} />
              </PageTransition>
            }
          />
          <Route
            path="/opinion-3"
            element={
              <PageTransition>
                <OpinionPage variant={3} />
              </PageTransition>
            }
          />
          <Route
            path="/opinion-4"
            element={
              <PageTransition>
                <OpinionPage variant={4} />
              </PageTransition>
            }
          />
          <Route
            path="/opinion-5"
            element={
              <PageTransition>
                <OpinionPage variant={5} />
              </PageTransition>
            }
          />
          <Route
            path="/opinion-6"
            element={
              <PageTransition>
                <OpinionPage variant={6} />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </NavigationTransitionProvider>
  )
}
