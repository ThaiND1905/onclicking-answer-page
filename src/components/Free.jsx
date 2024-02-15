import React from 'react';
import icon from '../assets/icon.png';
import Card from './Card';
import super1 from '../assets/super1.png';
export default function Free() {
  return (
    <div className='free'>
      <div className='container'>
        <div className='background'>
          <div className='ellipse blue'></div>
          <div className='ellipse pink'></div>
        </div>
        <div className='content'>
          <div className='image'>
            <img src={icon} alt="icon" />
          </div>
          <h2 className='title'>Questions for you</h2>
          <p className='description'>
            Answer all below questions
          </p>
        </div>
      </div>
      <div className='cards'>
        <div className='card1'>
          <Card 
          image = {super1}
          series = "10 Câu"
          title = "Câu 1"
          subtitle = ""
           />
        </div>
        <div className='card2'>
        <Card 
          image = {super1}
          series = "10 Câu"
          title = "Câu 2"
          subtitle= ""
           />
        </div>
      </div>
    </div>
  )
}
