import React from 'react'
import superEth from '../assets/supereth.png'
export default function Card({image,series,title,subtitle}) {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={image} alt="super" />
      </div>
      <div className='card-content'>
        <div className='card-heading'>
          <span className='card-series'>{series}</span>
          <span className='card-top'>Top bid</span>
        </div>
        <div className='card-detail'>
          <h4 className='card-title'>
            {title}
          </h4>
        </div>
        <div className='card-sub-detail'>
          <h3>{subtitle}</h3>
        </div>
      </div>
    </div>
  )
}
