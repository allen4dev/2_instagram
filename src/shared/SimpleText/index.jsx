import React from 'react';
import { string } from 'prop-types';

import './index.css';

function SimpleText({ children }) {

  return (
    <span className="SimpleText">
      {children}
    </span>
  );
}

SimpleText.propTypes = {
  children: string.isRequired,
};

export default SimpleText;
