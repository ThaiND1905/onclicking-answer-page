import React from 'react'
import home from '../assets/logo512.png'
export default function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <div className="content">
          <p className='sub-title'>Launching Soon</p>
          <h1 className='title'> JS Questions </h1>
          <p className='description'>10 questions about JS</p>
          <button>Goooo</button>
        </div>
        <div className='image-container'>
          <div className='image'>
            <img src={home} alt="home" />
            <div className='ellipse-container'>
              <div className='ellipse blue'></div>
              <div className='ellipse pink'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
