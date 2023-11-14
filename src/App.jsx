import './App.css'
import Footer from './components/footer/Footer'
import Gallery from './components/gallery/Gallery'
import Landing from './components/landing/Landing'
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import Info from './components/info/Info';

function App() {

  // Use lennis for smooth scroll
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])
 

  return (
    <div className="App">
      <Landing />
      <Gallery />

      <Footer />
    </div>
  )
}

export default App
