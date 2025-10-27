import React from 'react';
import './Footer.css';
import youtube_icons from '../../assets/youtube_icon.png';
import twitter_icons from '../../assets/twitter_icon.png';
import instagram_icons from '../../assets/instagram_icon.png';
import facebook_icons from '../../assets/facebook_icon.png';


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icons} alt="facebook-icons" />
        <img src={instagram_icons} alt="insta-icon" />
        <img src={twitter_icons} alt="twitter-icons" />
        <img src={youtube_icons} alt="youtube-icons" />
      </div>
      <ul>
        <li>Audio description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Legal Notice</li>
        <li>Privacy</li>
        <li>Terms of use</li>
        <li>Cookie Preferences</li>
        <li>Corporate Informantion</li>
        <li>Contact us</li>
      </ul>
      <p className='copyright-text'>C 1997 - 2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer