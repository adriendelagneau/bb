import './landing.scss'
import React from 'react'
import textSplitter from '../../helper/textSplitter';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';

const Landing = () => {

  const text = "Black Bird";
  const splitText = textSplitter(text);

  const text2 = "studio";
  const splitText2 = textSplitter(text2);

  useLayoutEffect(() => {
    gsap.to('.textFirst', {opacity:1 , translateY: 0})
    gsap.to(".title span", {opacity: 1, translateY: "0%", rotateY: '0deg', stagger: .06, duration: 1})
  }, [])

  return (
    <div id='landing'>
      <div className='textFirst'>episode #1</div>
      <div className="title">
        <div>
          {splitText}
        </div>
        <div>
        {splitText2}
        </div>
      </div>
      <div className='textFirst'>president du groupe eclore</div>
    </div>
  )
}

export default Landing