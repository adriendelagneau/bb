import './info.scss'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Info = () => {

  const myRef = useRef(null);

  useLayoutEffect(() => {
    // GSAP animation setup
    const section = myRef.current;
  

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
         // markers: true,
          invalidateOnRefresh: true
        },
      })
        .to(".container", { width: "100%", height: "100%" })
      
       
    }, section);

    return () => ctx.revert();
  }, []);
    
  return (
    <div id='info' ref={myRef}>
     
      <div className="container">
          <div className="imageContainer"  >
            <video src='../../../public/basketVideo_AdobeExpress_xkcnzr.mp4' loop muted autoPlay alt='' />  
          </div>
      </div>
    </div>
  )
}

export default Info