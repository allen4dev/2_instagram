import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './styles/app.css';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Error404 from './pages/Error404';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Header from './shared/Header';

import { auth } from './config/firebase';
// Here comes App specific stuff from client and server
// (Provider, etc)

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authed: false,
      loading: true,
    };
  }

  componentDidMount() {
    this.removeListener = auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        });
      } else {
        this.setState({
          authed: false,
          loading: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>;
    }

    const { authed } = this.state;

    return (
      <div className="App">
        <Header authed={this.state.authed} />
        <Switch>
          <PrivateRoute authed={authed} exact path="/" component={Home} />
          <PublicRoute authed={authed} path="/signin" component={Signin} />
          <PrivateRoute authed={authed} path="/detail/:id" component={Detail} />
          <PrivateRoute
            authed={authed}
            path="/profile/:id"
            component={Profile}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
