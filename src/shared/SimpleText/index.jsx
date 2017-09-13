import React from 'react';
import { string } from 'prop-types';

function SimpleText({ color, children }) {
  const style = { color: `var(--${color})` };
  return (
    <span style={style} className="SimpleText">
      {children}
    </span>
  );
}

SimpleText.propTypes = {
  children: string.isRequired,
  color: string.isRequired,
};

export default SimpleText;
