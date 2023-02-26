import React from 'react';
import call from "../assets/Vector.svg";
import basket from "../assets/basket.svg";
import './NavbarHeader.scss';
import { NavLink } from 'react-router-dom';



function NavbarHeader() {
  return (
    <>
     <div className='container'>
            <div className='navbar'>
                <ul className='navbar-header'>
                    <li>Hi!<NavLink to='Sign in'>Sign in</NavLink>  or <NavLink to='register'> register</NavLink></li>
                    <li>Daily Deals</li>
                    <li>Brand Outlet</li>
                    <li>Help & Contact</li>
                </ul>

                <ul className='navbar-header'>
                    <li>Sell</li>
                    <li>
                        <select >
                        <option value="watchlist">watchlist</option>
                        </select></li>
                    <li><select>
                        <option value="my ebay">My Ebay</option>
                        </select></li>
                    <li><img src={call} alt={call} /></li>
                    <li><img src={basket} alt={basket} /></li>
                </ul>

            </div>
            <hr />
        </div>
    </>
  )
}

export default NavbarHeader
