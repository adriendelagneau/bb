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
              .to('.content', {clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)"})
      }, section);

      return () => ctx.revert();

    }, []);

  return (
      <div id='gallery' ref={sectionRef}>
          <div className="content">
              <video src='../../../public/basketVideo_AdobeExpress_xkcnzr.mp4' autoPlay muted loop />
          </div>
    </div>
  )
}

export default Gallery