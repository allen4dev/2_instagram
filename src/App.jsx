import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

// Here comes App specific stuff from client and server
// (Provider, etc)

function Home() {
  return (
    <div>
      <h1>You are in Home</h1>
      <Link to="/category/anime">Go to anime</Link>
      <Link to="/random">Go to random</Link>
    </div>
  );
}

function Error404() {
  return <h1>You are in Error404</h1>;
}
/* eslint-disable*/
function Category({ match }) {
  return <h1>You are in Category: {match.params.name}</h1>;
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category/:name" component={Category} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
