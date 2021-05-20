import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import Controls from './Controls';
import Header from './Header';

const App = () => (
  <Router>
    <Header />
    <Controls />
    <Switch>
      <Route exact path="/" component={CharacterList} />
    </Switch>
  </Router>
);

export default App;
