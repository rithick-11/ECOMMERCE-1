import React from 'react'
import './Title.css'

const Title = ({heading}) => {
  return (
    <div className='heading-card'>
        <h1>{heading}</h1>
        <hr />
    </div>
  )
}

export default Title
