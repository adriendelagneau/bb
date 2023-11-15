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
          end: () => `+=${section.clientHeight }`,
          pin: true,
          scrub: true,
        },
      })

      // anime clip path
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${section.clientHeight}`,
          scrub: true,
        },
      })
        .to('.content1', { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" })

    }, section);

    return () => ctx.revert();

  }, []);

  return (
    <div id='gallery' ref={sectionRef}>
      <div className="container">
        <div className="content1">
          <img src='https://res.cloudinary.com/dos8mey8r/image/upload/v1678614339/xfujd0hpjwaqfuehk8ci.png' alt='' />
        </div>
        <div className="content2">
          <img src='https://res.cloudinary.com/dos8mey8r/image/upload/v1678450919/ubhzedognz3ibab2ggux.webp' alt='' />
        </div>
      </div>
    </div>
  )
}

export default Gallery