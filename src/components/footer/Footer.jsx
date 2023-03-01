import React from 'react';
import img from '../assets/img.svg';
import './Footer.scss';

 const Footer = () => {
  return (
    <div className='footer'>
        <ul className='footer-first-list'>
            <li>About eBay</li>
            <li>Announcements</li>
            <li>Community</li>
            <li>Security Center</li>
            <li>Seller Center</li>
            <li>Policies</li>
            <li>Affiliates</li>
            <li>Help & Contact</li>
            <li>Site Map</li>
        </ul>
        <ul className='footer-second-list'>
            <li className='span'>Copyright © 1995-2023 eBay Inc. All Rights Reserved.</li>
            <li><u>Accessibility</u></li>
            <span>,</span>
            <li><u>User Agreement,</u></li>
            <li><u>Privacy,</u></li>
            <li><u>Payments Terms of Use,</u></li>
            <li><u>Cookies,</u></li>
            <li><u>Your Privacy Choices</u><span className='span'>and</span> </li>
            <li><u>AdChoice</u></li>
            <li><img src={img} alt={img}/></li>
        </ul>
    </div>
  )
}
export default Footer
