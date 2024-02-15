import React from 'react'
import logo from '../assets/logo192.png';
import { BsFacebook, BsTwitter , BsInstagram } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
export default function Footer() {
  const links = [
    {
      title: "About",
      data: ["About", "Terms" , "Legal"]
    },
    {
      title: "React",
      data: ["Opensea", "Maker" , "Learn"]
    },
    {
      title: "Contact",
      data: ["Press", "Support"]
    },
    {
      title: "Social",
      data: ["Twitter", "Instagram"]
    },
  ];

  const socialLink = [
    <BsFacebook />,
    <BsTwitter />,
    <BsInstagram />,
    <FaTiktok />,
  ]
  return (
    <footer>
      <div className='upper'>
        <div className='brand-container'>
          <div className='brand'>
            <img src={logo} alt="logo" />
          </div>
          <p>Answer all the below questions</p>
          <ul>
            {
              socialLink.map((link,index)=>(
                <li key={index}>
                  {link}
                </li>
              ))
            }
          </ul>
        </div>
        <div className='links'>
          {
            links.map(({title,data},index)=>(
              <div className='link' key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link,index) => (
                    <li key={index}>
                      {link}
                    </li>
                  ))}
                </ul>
              </div>))
          }
        </div>
      </div>
      <div className='lower'>
        <span>&copy; Copyright by Thái</span>
      </div>
    </footer>
  )
}
