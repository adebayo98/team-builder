import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* VIEWS */

import HomeView from './views/HomeView';

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
      };
  }

  render() {
      return(
          <Router>
              <Route exact path="/">
                <HomeView />
              </Route>
          </Router>
      );
  }

}

export default App;
