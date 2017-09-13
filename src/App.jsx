import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './styles/app.css';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Error404 from './pages/Error404';
import Signin from './pages/Signin';
import Profile from './pages/Profile';

import Header from './shared/Header';

// Here comes App specific stuff from client and server
// (Provider, etc)

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/profile/:id" component={Profile} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
