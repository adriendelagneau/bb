import './footer.scss'
import React from 'react'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {

  const footerRef = useRef(null)

  useLayoutEffect(() => {

    const section = footerRef.current;

  

    let ctx = gsap.context(() => {
      // pin the section
  
 
}, section);

return () => ctx.revert();
  }, [])


  return (
    <div id='footer' ref={footerRef}>
      
   Footer
    </div>
  )
}

export default Footer