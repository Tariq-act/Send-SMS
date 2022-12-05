import React from 'react';

import linkedIN from '../../assets/icons/Linkedin.svg';
import instagram from '../../assets/icons/Instagram.svg';
import twitter from '../../assets/icons/Twitter.svg';

import './Footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='term'>
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
      </div>
      <div className='copy-right'>
        &copy; Copyright &copy;2021 All rights reserved
      </div>
      <div className='social-link'>
        <a href='https://www.linkedin.com/' rel='noreferrer' target='_blank'>
          <img src={linkedIN} alt='' />
        </a>
        <a href='https://www.instagram.com/' rel='noreferrer' target='_blank'>
          <img src={instagram} alt='' />
        </a>
        <a href='https://twitter.com/' rel='noreferrer' target='_blank'>
          <img src={twitter} alt='' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
