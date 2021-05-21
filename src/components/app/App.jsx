import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CharacterList from '../../components/characters/CharacterList';
import Controls from './Controls';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Controls />
      <Switch>
        <Route exact path="/" component={CharacterList} />
      </Switch>
    </Router>
  );
}
