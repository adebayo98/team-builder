import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/styles/style.scss';

/* VIEWS */

import HomeView from './views/HomeView';
import AdminView from './views/AdminView';
import ProfileView from './views/ProfileView';


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
              <Route exact path="/admin">
                <AdminView />
              </Route>
              <Route exact path="/profile">
                <ProfileView />
              </Route>
          </Router>
      );
  }

}

export default App;
