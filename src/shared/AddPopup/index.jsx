import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from './../Avatar';
import SimpleText from './../SimpleText';

import './index.css';

/* eslint-disable */
function AddPopup({ handleClose }) {
  return (
    <section className="AddPopup">
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
        <button className="AddPopup-imageButton btn">+</button>
      </div>
      <footer className="AddPopup-footer">
        <Link to="/" className="AddPopup-cancel">
          <button className="btn" onClick={handleClose}>Cancel</button>
        </Link>
        <button className="btn">Post</button>
      </footer>
    </section>
  )
}

export default AddPopup;
