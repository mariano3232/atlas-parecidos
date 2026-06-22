import { HeroSection } from './components/sections/HeroSection'
import { ScrollIntro1 } from './components/sections/ScrollIntro1'
import { ScrollIntro2 } from './components/sections/ScrollIntro2'
import { InteractionSection } from './components/sections/InteractionSection'
import { ConnectionSection } from './components/sections/ConnectionSection'
import { AtlasSection } from './components/sections/AtlasSection'
import { GallerySection } from './components/sections/GallerySection'
import { OpinionSection } from './components/sections/OpinionSection'
import ScrollContainer from 'react-indiana-drag-scroll'
import 'react-indiana-drag-scroll/dist/style.css';

function App() {
  return (
    <main 
      // className="snap-container"
    >
      {/* <ScrollContainer className="h-screen overflow-auto"> */}
      <HeroSection />
      {/* <ScrollIntro1 />
      <ScrollIntro2 /> */}
      {/* <AtlasSection /> */}
      <InteractionSection />
      {/* <ConnectionSection /> */}
      {/* <GallerySection /> */}
      <OpinionSection />
      {/* </ScrollContainer> */}
    </main>
  )
}

export default App
