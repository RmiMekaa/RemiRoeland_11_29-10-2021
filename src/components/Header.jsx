import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/" className="header__link"><img src={logo} alt="logo" /></Link>
        <nav>
          <Link to="/" className="header__link">Accueil</Link>
          <Link to="/About" className="header__link">À Propos</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
