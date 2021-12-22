import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/" className="header__link"><img src={logo} alt="logo" /></Link>
        <nav>
          <NavLink exact to="/" className="header__link" activeClassName="header__link--active">Accueil</NavLink>
          <NavLink to="/About" className="header__link" activeClassName="header__link--active">À Propos</NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
