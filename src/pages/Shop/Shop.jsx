import React from 'react'
import Hero from '../../components/Hero/Hero'
import Popular from '../../components/Popular_item/Popular'
import './Shop.css'
import Offer_card from '../../components/Offer_card/Offer_card'
import New_collection from '../../components/New_collection/New_collection'

const shop = () => {
  return (
    <div>
      <Hero/>
      <div className='component-Container'>
        <Popular/>
        <Offer_card className=""/>
        <New_collection />
      </div>
      
    </div>
  )
}

export default shop
