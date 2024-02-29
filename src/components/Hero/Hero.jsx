import React from 'react'
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import hero_image from'../Assets/hero_image.png';


const Hero = () => {
  return (
    <div className='Hero'>
        <div className='Hero-left'>
            <h1>FASHION FOR EVERYONE</h1>
            <div className='slogan-hero'>
                <div className='hand-icon'>
                    <p>Hooo</p>
                    <img src={hand_icon} alt="" srcset="" />
                </div>
                <p>Made Your Style</p>
                <p>Withs a fantastic Collection's</p>
            </div>
            <button>Get a Look</button>
        </div>
        <div className="Hero-right">
            <img src={hero_image} alt="" srcset="" />
        </div>
        
    </div>
  )
}

export default Hero
