import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Cards from './components/Cards';
import CardView from './components/CardView';
import NoMatch from './components/NoMatch';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/cards" component={Cards} />
    <Route exact path="/cards/:id" component={CardView} />
    <Route component={NoMatch} />
  </Switch>
)


export default App;
