import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <nav className="header">
        <img src={logo} alt="logo" />
        <div>
          <Link to="/home">Home</Link>
          <Link to="/order">Order</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </div>
      </nav>
    );
};

export default Header;