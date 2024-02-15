import React, { useState } from "react";
import { GiHamburger } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/logo192.png";

export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  return (
    <nav name="nav">
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {
            navState ? 
            (<MdClose onClick={() => setNavState(false)}/>)
            :(<GiHamburger onClick={() => setNavState(true)}/>)
            }
            
          </div>
          <div className="mode" onClick={changeTheme}>
            {currentTheme === "light" ? (
              <BsFillMoonFill className="dark" />
            ) : (
              <ImSun className="light" />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
          <li>
            <a href="#">Câu hỏi</a>
          </li>
          <li>
            <a href="#">Về React</a>
          </li>
          <li>
            <a href="#">Liên lạc</a>
          </li>
          <li>
            <a href="#">Đăng ký</a>
          </li>
          <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <BsFillMoonFill className="dark" />
            ) : (
              <ImSun className="light" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
