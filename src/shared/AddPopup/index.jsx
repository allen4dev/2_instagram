import React from 'react';
import { func, string } from 'prop-types';
import { Link } from 'react-router-dom';

import Avatar from './../Avatar';
import SimpleText from './../SimpleText';

import './index.css';

// Refactor: Should be component of feature Photos and manage
//           the handleAdd in Home container (set false in overlay)
function AddPopup({ handleClose, handleAdd, handleChange, description }) {
  return (
    <form className="AddPopup" onSubmit={handleAdd}>
      <header className="AddPopup-header">
        <Avatar
          src="https://avatarfiles.alphacoders.com/846/84606.jpg"
          description="allen4dev avatar"
          width={8}
        />
        <SimpleText>Alan Aliaga</SimpleText>
      </header>
      <div className="AddPopup-body">
        <textarea
          className="AddPopup-description"
          rows="10"
          name="description"
          onChange={handleChange}
          value={description}
        />
        <input
          className="AddPopup-inputFile"
          type="file"
          name="photo"
          onChange={handleChange}
        />
      </div>
      <footer className="AddPopup-footer">
        <Link to="/" className="AddPopup-cancel">
          <button className="btn" onClick={handleClose}>
            Cancel
          </button>
        </Link>
        <button className="btn" type="submit">
          Post
        </button>
      </footer>
    </form>
  );
}

AddPopup.propTypes = {
  handleClose: func.isRequired,
  handleAdd: func.isRequired,
  handleChange: func.isRequired,

  description: string.isRequired,
};

export default AddPopup;
