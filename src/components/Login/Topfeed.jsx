import React from 'react';
import Logo from "../../assets/logo.png";
import "./login.css";

const Topfeed = () => {
  return (
    <div className='company-tag'>
        <img className='logo' src={Logo} alt="Genny Fiannce logo"/>
        <span className="company-name"><span className="product-name">Mingo</span>9<span className="product-name-2">ja</span></span>
    </div>
  )
}

export default Topfeed;



