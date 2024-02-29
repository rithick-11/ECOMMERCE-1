import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/rithi-x-shop.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [menu_state, setState] = useState("shop");

  return (
    <div className='Navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <Link style={{textDecoration:'none'}} to='/'><li onClick={()=> {setState("shop")}}>Shop  {menu_state === "shop" ? <hr/>: <></>}</li></Link>
        <Link style={{textDecoration:'none'}} to='/mens'><li onClick={()=> {setState("mens")}}>Men's {menu_state === "mens" ? <hr/>: <></>}</li></Link>
        <Link style={{textDecoration:'none'}} to='/womens'><li onClick={()=> {setState("womens")}}>Women's   {menu_state === "womens" ? <hr/>: <></>}</li></Link>
        <Link style={{textDecoration:'none'}} to='/kids'><li onClick={()=> {setState("kids")}}>Kid's  {menu_state === "kids" ? <hr/>: <></>}</li></Link>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Log-in</button></Link>
        <div className='nav-cart'>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className='cart-count'>
                0
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
