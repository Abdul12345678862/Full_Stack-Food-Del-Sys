import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="footer-socail-icons">
                    <a href="https://www.facebook.com/profile.php?id=100004235447779" target="_blank">
                    <img src={assets.facebook_icon} alt="" /></a>
                    <img src={assets.twitter_icon} alt="" />
                    <a href="https://www.linkedin.com/in/abdul-haseeb-b0658a173/" target="_blank">
                    <img src={assets.linkedin_icon} alt="" /></a>
                </div>
            </div>
            <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
            </div>
            <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+923182554954</li>
                <li>ah7860939@gmail.com</li>
            </ul>
            </div>
        </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 © Tomato.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer
