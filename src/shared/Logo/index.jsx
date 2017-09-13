import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

function Logo() {
  return (
    <Link to="/" className="Logo">
      <h1 className="Logo-title">Instagram</h1>
    </Link>
  );
}

export default Logo;
