import React from 'react';
import { element } from 'prop-types';

import './index.css';

function Card({ children }) {
  return (
    <div className="Card">{children}</div>
  )
}

Card.propTypes = {
  children: element.isRequired,
};

export default Card;
