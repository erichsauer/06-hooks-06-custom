import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AvatarCharacter from '../../containers/AvatarCharacter';
import Controls from './Controls';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={AvatarCharacter} />
      </Switch>
    </Router>
  );
}
