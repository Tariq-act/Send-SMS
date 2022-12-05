import React from 'react';
import BrandLogo from '../../assets/Stocksy_Logo_Horizontal_Transp_White 1.svg';

import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <img src={BrandLogo} alt='Brand Logo' className='brand-image' />
    </div>
  );
};

export default Navbar;
