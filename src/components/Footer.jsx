import React, { Component } from 'react';
import footerLogo from '../assets/footerLogo.png';

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <img className='footer__logo'src={footerLogo} alt="logo"></img>
        <span className='footer__text'>© 2020 Kasa. All rights reserved</span>
      </footer>
    );
  }
}

export default Footer;
