import React, { Component } from 'react';

import { loginWithGoogle } from './../../helpers/auth';

import './index.css';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
  }

  handleGoogleLogin() {
    loginWithGoogle()
      .then(user => {
        console.log(user);
      })
      .catch(error => {
        console.log('Invalid username/password.', error);
      });
  }

  render() {
    return (
      <section className="Signin">
        <h2 className="Signin">Page</h2>
        <button className="btn btn-google" onClick={this.handleGoogleLogin}>
          Signin with google
        </button>
      </section>
    );
  }
}

export default Signin;
