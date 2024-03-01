import React, { useState } from 'react';
import logo from '../Assets/rithi-x-logo.png';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-list'>            
            <div className='footer-tems'>
                <a href="">Terms and conditions</a>
                <a href="">Privacy policy</a>
                <a href="">Subscribe to our newsletter</a>
                <a href="">Learn more</a>
            </div>
            <div className='social-icon'>
                <ul>
                    <h1>Social Media</h1>
                    <li><i class="bi bi-twitter-x"></i> X / twitter</li>
                    <li><i class="bi bi-instagram"></i> Instagram</li>
                    <li><i class="bi bi-facebook"></i> Facebook</li>
                    <li><i class="bi bi-whatsapp"></i> What's app</li>
                </ul>
            </div>
            <div>
                <img src={logo} alt="" />
            </div>
        </div>
        <hr />
        <p className='tems-condition'>@ 2024 rithi-x all copyrigths recives</p>
    </div>
  )
}

export default Footer
