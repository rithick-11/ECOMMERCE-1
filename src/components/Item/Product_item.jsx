import React from 'react'
import './Product_item.css'

const Product_item = (item) => {
  return (
    <div className='Item-product'>
      <img src={item.image} alt="" srcset="" />
      <p>{item.name}</p>
      <div className='price-btn'>
        <div>
            <p>${item.old_price}</p>
            <p className='new-price'>${item.new_price}</p>
        </div>
        <button>Know more</button>
      </div>
    </div>
  )
}

export default Product_item
