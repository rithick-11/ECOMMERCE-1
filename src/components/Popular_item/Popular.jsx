import React from 'react'
import product_data from '../Assets/data';
import Product_item from '../Item/Product_item.jsx';
import './popular.css';
import Title from '../Title/Title.jsx';


const Popular = () => {
  return (
    <div className='popular-container'>
      <Title heading="Popular Collection's"/>
        <div className='popular-items'>
            {product_data.map((item,i)=> <Product_item image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />)}
        </div>
    </div>
  )
}

export default Popular
