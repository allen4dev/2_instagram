import React from 'react';
import { func } from 'prop-types';
import { Link } from 'react-router-dom';

import Avatar from './../Avatar';
import SimpleText from './../SimpleText';

import './index.css';

// Refactor: Should be component of feature Photos and manage
//           the handleAdd in Home container (set false in overlay)
function AddPopup({ handleClose, handleAdd }) {
  return (
    <form className="AddPopup">
      <header className="AddPopup-header">
        <Avatar
          src="https://avatarfiles.alphacoders.com/846/84606.jpg"
          description="allen4dev avatar"
          width={8}
        />
        <SimpleText>Alan Aliaga</SimpleText>
      </header>
      <div className="AddPopup-body">
        <textarea className="AddPopup-description" rows="10" />
        <input
          className="AddPopup-inputFile"
          type="file"
        />
      </div>
      <footer className="AddPopup-footer">
        <Link to="/" className="AddPopup-cancel">
          <button className="btn" onClick={handleClose}>Cancel</button>
        </Link>
        <button
          className="btn"
          onClick={handleAdd}
        >
          Post
        </button>
      </footer>
    </form>
  )
}

AddPopup.propTypes = {
  handleClose: func.isRequired,
  handleAdd: func.isRequired    
}

export default AddPopup;
