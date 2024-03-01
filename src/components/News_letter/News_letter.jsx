import React from 'react'
import './News_letter.css';

const News_letter = () => {
  return (
    <div className='component-Container news-letter'>
        <div className='news-letter-left'>
            <p>This month, we're shining a spotlight on one of our amazing customers</p>
            <h1>Just Subcribe Our</h1>
            <p>to reach you</p>
        </div>
        <div className='news-letter-right'>
            <label htmlFor="Email">To Subcribe</label>
            <input type="email" placeholder='Enter yout Email addres' />
            <button>Submit</button>
        </div>
    </div>
  )
}

export default News_letter
