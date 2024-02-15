import React, { useState,useEffect } from 'react';
import scrollreveal from 'scrollreveal';
import ScrollToTop from './components/ScrollToTop';
import Free from './components/Free';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Questions from './components/Questions';
import SuperRare from './components/SuperRare';
import Like from './components/Like';
import SignUp from './components/SignUp';
import Release from './components/Release';
import Footer from './components/Footer';

import './scss/index.scss';

export default function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () =>{
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }
  useEffect(()=>{
    const registerAnimation = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,.home,.free,.question,footer
        `,
        {interval: 250}
      );
    };
    registerAnimation();
  },[]);

  window.setTimeout(() => {
    const home = document.getElementsByClassName('home');
    home[0].style.transform = 'none';
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = 'none';

  },1500);
  return (
    <div className='app-container' data-theme={theme}>
      <ScrollToTop />
      <Navbar changeTheme ={changeTheme} currentTheme={theme} />
      <Home />
      <Free />
      <Questions />
      <SuperRare />
      <Release />
      <Like />
      <SignUp />
      <Footer />
    </div>
  );
}
