import React from 'react';
import mailIcon from '../../assets/icons/Vector.svg';

import './Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <span className='contact-field'>Contact</span>
      <span className='mail-field'>
        <img src={mailIcon} alt='mail' className='mail-icon' />
        <a href='mailTo:hello@stocksy.app'>hello@stocksy.app</a>
      </span>
    </div>
  );
};

export default Contact;
