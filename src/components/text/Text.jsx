import './text.scss'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

const phrases = [
    " Bienvenue au Havana Cocktail, votre passeport pour une aventure de saveurs. Explorez des boissons uniques alliant alcools, liqueurs et fruits du monde entier.",
    "Explorez des boissons uniques alliant alcools, liqueurs et fruits du monde entier.Explorez des boissons uniques alliant alcools, liqueurs et fruits du monde entier.", 
  ];

const Text = () => {

    let refs = useRef([]);
    const container = useRef(null);

  
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger)
      createAnimation()
  
  
    }, [])
  
    const createAnimation = () => {
      gsap.to(refs.current, {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: `top 70%`,
          end: `bottom bottom`,
         // markers: true
        },
        opacity: 1,
        ease: "none",
        stagger: 0.1
      })
    }
  
   
  
    const splitWords = (phrase) => {
      let body = [];
      phrase.split(" ").forEach((word, i) => {
        const letters = splitLetters(word);
        body.push(<p key={word + "_" + i}>{letters}</p>)
      })
      return body
    }
  
    const splitLetters = (word) => {
      let letters = []
      word.split("").forEach((letter, i) => {
        letters.push(<span key={letter + "_" + i} ref={el => { refs.current.push(el) }}>{letter}</span>)
      })
      return letters;
    }


  return (
      <div id='text'>
             <div className="container" ref={container}>
                {phrases.map((phrase, index) => (
          <div key={index} className="paragraph">
            {splitWords(phrase)}
          </div>
        ))}

      </div>
    </div>
  )
}

export default Text