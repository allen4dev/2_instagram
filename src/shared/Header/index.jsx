import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from './../Logo';
import Form from './../Form';

import { logout } from './../../helpers/auth';

import './index.css';

function renderActions(authed) {
  if (authed) {
    return (
      <div className="ButtonGroup">
        <button className="btn btn-flat">🍔</button>
        <button className="btn btn-flat">🌭</button>
        <button className="btn btn-flat">🍖</button>
        <button onClick={logout} className="btn btn-flat">
          Logout
        </button>
      </div>
    );
  }
  return (
    <Link className="Header-link" to="/signin">
      Login
    </Link>
  );
}
function Header({ authed }) {
  return (
    <header className="Header">
      <Logo />
      <div className="Header-searchbar">
        <Form />
      </div>
      {renderActions(authed)}
    </header>
  );
}
Header.propTypes = {
  authed: bool.isRequired,
};
export default Header;
