import React, { useState } from 'react';
import logo from '../Assets/rithi-x-logo.png';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-tems'>
            <a href="">Terms and conditions</a>
            <a href="">Privacy policy</a>
            <a href="">Subscribe to our newsletter</a>
            <a href="">Learn more</a>
        </div>
        <div className="footer-menu">
        </div>
        <ul>
            <h1>Social Media's</h1>
            <li><i class="bi bi-x-square-fill"></i></li>
        </ul>
        <div>    
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default Footer
