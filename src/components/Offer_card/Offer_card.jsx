import React from 'react'
import './Offer_card.css'
import offer_image from '../Assets/special_offer.png';

const Offer_card = () => {
  return (
    <div className='offer-conatainer'>
      <div className='offer-left'> 
        <p>Unleash the</p>
        <p><span>Trendsetter</span> With <span>Us</span></p>
      </div>
      <div className='offer-right'>
        <img src={offer_image} alt="" />
      </div>
    </div>
  )
}

export default Offer_card
