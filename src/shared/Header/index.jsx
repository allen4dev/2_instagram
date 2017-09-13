import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './../Logo';
import Searchbar from './../Searchbar';

import './index.css';

function Header() {
  return (
    <header className="Header">
      <Logo />
      <Searchbar />
      <Link className="Header-link" to="/signin">
        Login
      </Link>
    </header>
  );
}

export default Header;
