import React from 'react'
import Hero from '../../components/Hero/Hero'
import Popular from '../../components/Popular_item/Popular'
import './Shop.css'

const shop = () => {
  return (
    <div>
      <Hero/>
      <div className='Hero-container'>
        <Popular/>
      </div>
      
    </div>
  )
}

export default shop
