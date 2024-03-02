import React from 'react';
import Title from '../Title/Title';
import new_collection from '../Assets/new_collections';
import Product_item from '../Item/Product_item';
import './New_collection.css';

const New_collection = () => {
  return (
    <div>
        <Title heading={"New Collection"} />
        <div className='colletion-list'>
            {new_collection.map((item,i) => <Product_item key ={i} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />)}
        </div>
    </div>
  )
}

export default New_collection
