import React from 'react';
import { string } from 'prop-types';

import './index.css'

function Text({ color, children }) {
  const style = { color: `var(--${color})` };
  return (
    <p style={style} className="Text">
      {children}
    </p>
  );
}

Text.propTypes = {
  children: string.isRequired,
  color: string,
};

Text.defaultProps = {
  color: 'text'
}

export default Text;
