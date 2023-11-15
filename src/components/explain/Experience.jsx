import './explain.scss'
import React, { useLayoutEffect, useRef } from 'react'
import textSplitter from '../../helper/textSplitter';
import gsap from 'gsap';

const Experience = () => {


    const text = "experience";
  const text2 = "est là.";
    
    const splitText = textSplitter(text);
    const splitText2 = textSplitter(text2);

    
    const experienceRef = useRef(null);
    useLayoutEffect(() => {
        const spans = gsap.utils.toArray("#experience span")

      // GSAP animation setup
      const experience = experienceRef.current;
  
      let ctx = gsap.context(() => {
  
        // anime clip path
        gsap.timeline({
          scrollTrigger: {
            trigger: experience,
            start: 'top 50%',
            end: 'top 10%',
                scrub: true,
            markers: true
          },
        })
          .to(spans, {scale: 1, stagger: .05, translateY: '15%', ease: "power2.out" })
  
      }, experience);
  
      return () => ctx.revert();
  
    }, []);

  return (
      <div id='experience' ref={experienceRef}>
          <div className='container'>
              <div className='top'>
              {splitText}
          </div>
          <div className='bottom'>
          {splitText2}
          </div>
          </div>

    </div>
  )
}

export default Experience