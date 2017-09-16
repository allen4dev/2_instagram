import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';

import { loginWithGoogle } from './../../helpers/auth';

import Logo from './../../shared/Logo';
import Image from './../../shared/Image';

import './index.css';
import phoneImage from './images/phone.png';

import users from './../../modules/users';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
  }

  handleGoogleLogin() {
    loginWithGoogle()
      .then(result => {
        const { uid, displayName, email } = result.user;
        this.props.setCurrentUser(uid);
        this.props.addUser({ uid, displayName, email });
      })
      .catch(error => {
        console.log('Invalid username/password.', error);
      });
  }

  // ToDo: Add email and password auth
  render() {
    return (
      <section className="Signin">
        <div className="Signin-welcome">
          <Image src={phoneImage} description="welcome image from instagram" />
        </div>
        <div className="Signin-social">
          <Logo />
          <div className="Signin-buttons">
            <button className="btn btn-facebook">Signin with Facebook</button>
            <button className="btn btn-google" onClick={this.handleGoogleLogin}>
              Signin with Google
            </button>
            <button className="btn btn-twitter">Signin with Twitter</button>
          </div>
        </div>
      </section>
    );
  }
}

Signin.propTypes = {
  setCurrentUser: func.isRequired,
  addUser: func.isRequired,
};

export default connect(null, users.actions)(Signin);
