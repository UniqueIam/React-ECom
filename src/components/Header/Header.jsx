import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

function Header() {

  const changeBg = ()=>{
    document.querySelector('#log-in-button').style.backgroundColor='red';
  }

  const backChangeBg = ()=>{
    document.querySelector('#log-in-button').style.backgroundColor='#fff';

  }
  return (
    <>
    <div className='upper-portion'>
      <div className='left'>
        {/* <img src='./Images/logo.jpg' alt='logo' id='company-logo'></img> */}
        <h2>Exclusive</h2>
      </div>
      <div className='middle'>
        <NavLink
          to="/"
           style={({isActive})=>({
            color:isActive? "red" :"black",
           })}
           >
           Home
          </NavLink>

          <NavLink
          to="/about"
           style={({isActive})=>({
            color:isActive? "red" :"black",
           })}
           >
           About
          </NavLink>

          <NavLink
          to="/product"
           style={({isActive})=>({
            color:isActive? "red" :"black",
           })}
           >
           Product
          </NavLink>

          <NavLink
          to="/contact"
           style={({isActive})=>({
            color:isActive? "red" :"black",
           })}
           >
          Contact
          </NavLink>

          <Link to='sign-up' id='log-in-button' onMouseMove={changeBg} onMouseLeave={backChangeBg}>Sign Up</Link>

      </div>
          <div className='right'>
            <div className='search-area'>
              <input type='text' id='search-box' placeholder='what are you looking for?'></input>
            </div>
          <Link to='cart' id='cart-button'>
          <FaShoppingCart />
          <span className='cart-total-number'>10</span>
          </Link>
          </div>
    </div>
    </>
  )
}

export default Header
