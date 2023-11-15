import './header.scss'
import React from 'react'

const Header = () => {
  return (
      <nav id='header'>
          <ul>
              <li>
                  <div className="container">
                    <div className='top'>episodes</div>
                    <div className='bottom'>episodes</div>  
                  </div>

            </li>
            <li>
                  <div className="container">
                    <div className='top'>pourquoi #lvr</div>
                    <div className='bottom'>pourquoi #lvr</div>  
                  </div>
              </li>
              <li>
                  <div className="container">
                    <div className='top'>contact</div>
                    <div className='bottom'>contact</div>  
                  </div>
            </li>
          </ul>
          <div className='leftPart'>
              <div>les</div>
              <div>vraies</div>
              <div>recontres</div>
          </div>
    </nav>
  )
}

export default Header