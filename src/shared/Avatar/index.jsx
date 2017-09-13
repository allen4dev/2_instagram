import React from 'react';
import { string, number } from 'prop-types';

import './index.css';

function Avatar({ width, src, description }) {
  const style = { width: `${width}%` };
  
  return (
    <div className="Avatar" style={style}>
      <img src={src} alt={description} className="Avatar-image"/>
    </div>
  )
}

Avatar.propTypes = {
  src: string.isRequired,
  description: string.isRequired,
  width: number,
};

Avatar.defaultProps = {
  width: 100,
};

export default Avatar;
