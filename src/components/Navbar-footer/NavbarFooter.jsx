import React from 'react';
import './NavbarFooter.scss';
import heart_icon from "../assets/heart_icon.svg";
import Asosiy from '../Navbar_middle/NavbarMiddle'


function NavbarFooter() {
  return (
    <>
    <Asosiy/>
         <ul className='navbar-footer-list'>
                <li>Home</li>
                <li><img src={heart_icon} alt={heart_icon} />Saved</li>
                <li>Motors</li>
                <li>Electronics</li>
                <li>Collectibles</li>
                <li>Home & Garden</li>
                <li>Fashion</li>
                <li>Toys</li>
                <li>Sporting Goods</li>
                <li>Business & Industrial</li>
                <li>Jewelry & Watches</li>
                <li>eBay Live</li>
                <li>Refurbished</li>
            </ul>
    </>
  )
}

export default NavbarFooter
