import React, { useState } from 'react'
import Product_item from '../../components/Item/Product_item';
import all_product from '../../components/Assets/all_product'
import './Category_shop.css'

const Category_shop = ({category}) => {
  return (
    <div className='component-Container '>
      <div className='colletion-list'>
        {all_product.map((item,i)=>{
          return (
            <Product_item key ={i} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price}/>
          )
        })}
      </div>
    </div>
  )
}

export default Category_shop
