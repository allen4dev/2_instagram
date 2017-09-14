import React from 'react';
import { func } from 'prop-types';
import { Link } from 'react-router-dom';

// More buttons here, use export function SomeButton() {}

function AddButton({ handleClick }) {
  return (
    <Link
      to="/add"
      onClick={handleClick}
    >
      <button className="btn btn-add">+</button>
    </Link>
  )
}

AddButton.propTypes = {
  handleClick: func.isRequired,
}

export default AddButton;
