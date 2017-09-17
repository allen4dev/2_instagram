import React from 'react';
import { string, func } from 'prop-types';

import './index.css';

function Form({ placeholder, value, handleChange, handleSubmit }) {
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="Form-input"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}

Form.propTypes = {
  placeholder: string,
  value: string.isRequired,
  handleChange: func.isRequired,
  handleSubmit: func.isRequired,
};

Form.defaultProps = {
  placeholder: '',
};

export default Form;
