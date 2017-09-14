import React from 'react';
import { string } from 'prop-types';

import './index.css';

function Title({ children }) {
  return <h2 className="Title">{children}</h2>
}

Title.propTypes = {
  children: string.isRequired,
};

export default Title;
