import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import StorySlider from './components/StorySlider'
import Events from './components/Events'
import Programs from './components/Programs'
import Stats from './components/Stats'
import Gallery from './components/Gallery'
import Team from './components/Team'
import HonourBoard from './components/HonourBoard'
import News from './components/News'
import Partners from './components/Partners'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 138 }}>
        <Hero />
        <About />
        <StorySlider />
        <Events />
        <Programs />
        <Stats />
        <Gallery />
        <Team />
        <HonourBoard />
        <News />
        <Partners />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
