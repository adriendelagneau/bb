import './info.scss'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Info = () => {

  const sectionRef = useRef(null);
  const containerRef = useRef(null)

  useLayoutEffect(() => {
    // GSAP animation setup
    const section = sectionRef.current;
    const container = containerRef.current

    let ctx = gsap.context(() => {
            // pin the section
          gsap.to(section, {
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: () => `+=${section.clientHeight}`,
              pin: true,
            scrub: true,
            },
          })
      
      
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${section.clientHeight}`,
          scrub: true,
          markers: true,
          invalidateOnRefresh: true
        },
      })
        .to(container,  { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' })
       
    }, section);

    return () => ctx.revert();
  }, []);
    
  return (
      <div id='info' ref={sectionRef}>
          <div className="container">
              <div className="imageContainer" ref={containerRef} >
                <img src='../../../public/290628beaf1d7add6159b0c0730a9ff8b21040ae4585fde305a5ca7e75494ed6.webp' alt='' />  
              </div>
            
          </div>
    </div>
  )
}

export default Info