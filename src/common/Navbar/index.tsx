import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import GrowwLogo from '../../assets/images/GrowwLogo.png'


import './index.css'
function Navbar() {
  return <div className='nav219NavbarContainer'>
    <div className='nav219NavbarDiv'>
     <img src={GrowwLogo} className="img219LogoImage nav219NavbarItem"/>
      <h3 className='nav219NavbarHeading nav219NavbarItem'>Growwgram</h3>
    </div>
   
      <FontAwesomeIcon className='nav219NavbarItem fap219UserProfile' icon={faUserCircle} size='2x'/>
  </div>;
}

export default Navbar;
