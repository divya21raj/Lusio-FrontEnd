import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Layout from './Layout';
import StreamGame from './StreamGame';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
                <Route exact path='/' component={Layout} />
                <Route path='/stream' component={StreamGame} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App; 
