import './gallery.scss'
import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {

    const sectionRef = useRef(null);

    useLayoutEffect(() => {
      // GSAP animation setup
      const section = sectionRef.current;
  
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
                    },
              })
              .to('.content1', {clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"})
      }, section);

      return () => ctx.revert();

    }, []);

  return (
    <div id='gallery' ref={sectionRef}>
      <div className="container">

          <div className="content1">
              <img src='../../../public/290628beaf1d7add6159b0c0730a9ff8b21040ae4585fde305a5ca7e75494ed6.webp' alt='' />
        </div>
        
        <div className="content2">
              <img src='../../../public/istockphoto-515173623-612x612.jpg' alt='' />
        </div>

      </div>
    </div>
  )
}

export default Gallery