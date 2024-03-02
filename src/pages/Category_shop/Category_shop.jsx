import React, { useState } from 'react'
import Product_item from '../../components/Item/Product_item';
import all_product from '../../components/Assets/all_product'
import './Category_shop.css'
import Title from '../../components/Title/Title';
import Offer_card from '../../components/Offer_card/Offer_card';
import New_collection from '../../components/New_collection/New_collection';

const Category_shop = (props) => {
  return (
    <div className='component-Container'>
      <img className='category-banner ' src={props.banner}/>
      <Title heading={`Best outfit's for ${props.category}`}/>
      <div className='colletion-list'>
        {all_product.map((item,i)=>{
          if(item.category === props.category){
            return (
              <Product_item key ={i} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price}/>
            )
          }
        })}
      </div>
      <Offer_card />
      <New_collection />
    </div>
  )
}

export default Category_shop
