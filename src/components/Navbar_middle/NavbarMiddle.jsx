import React from 'react';
import './NavbarMiddle.scss';
import logo from "../assets/logo..svg";
import Search_icon from "../assets/search..svg";


function NavbarMiddle() {
  return (
    <>
        <div className='container'>
                <ul className='navbar-middle'>
                    <li><img src={logo} alt={logo} /></li>
                    <li>Shop by category<select /></li>
                    <form>
                        <img src={Search_icon} alt={Search_icon} />
                        <input type="text" placeholder='Search for anything' />
                        <span>All Categories<select /></span><button className='navbar-btn'>Search</button>Advanced
                    </form>

                </ul>
                <hr />
            </div>
    </>
  )
}

export default NavbarMiddle
