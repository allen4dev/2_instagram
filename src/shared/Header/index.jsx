import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './../Logo';
import Form from './../Form';

import './index.css';

function Header() {
  return (
    <header className="Header">
      <Logo />
      <div className="Header-searchbar">
        <Form />
      </div>
      <Link className="Header-link" to="/signin">
        Login
      </Link>
    </header>
  );
}

export default Header;
