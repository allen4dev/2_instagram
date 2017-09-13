import React from 'react';
import { string } from 'prop-types';

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
  color: string.isRequired,
};

export default Text;
