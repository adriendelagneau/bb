import './App.css'
import Footer from './components/footer/Footer'
import Gallery from './components/gallery/Gallery'
import Landing from './components/landing/Landing'
import Lenis from '@studio-freight/lenis';
import { useEffect, useLayoutEffect, useRef } from 'react';
import Info from './components/info/Info';
import gsap from 'gsap';
import Header from './components/header/Header';
import Text from './components/text/Text';
import Experience from './components/explain/Experience';


function App() {

  const appRef = useRef(null)

  // Use lennis for smooth scroll
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])


/*
  useLayoutEffect(() => {

    const section = appRef.current;

    let ctx = gsap.context(() => {
      
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
         start: '50% top',
          end: "51% top", 
         // markers: true,
          toggleActions: "play none play reverse" // onEnter onLeave onEnterBack onLeaveBack
        }
      })
  
      .to(section, {color: "#fb5724", background: '#1a2842'})
 
    }, section);
    return () => ctx.revert();
  }, [])
*/
  
  return (
    <div className="App" ref={appRef}>
      <Header />
      <Landing />
      <Gallery />
      <Text />
      <Experience />
      <Info />
      <Footer />
    </div>
  )
}

export default App
