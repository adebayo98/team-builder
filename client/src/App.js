import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/styles/style.scss';

/* VIEWS */

import HomeView from './views/HomeView';
import AdminView from './views/AdminView';
import ProfileView from './views/ProfileView';
import SignInView from './views/SignInView';
import SignInView2 from './views/SignInView-2';


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
              <Route exact path="/signin">
                <SignInView />
              </Route>
              <Route exact path="/signin2">
                <SignInView2 />
              </Route>
          </Router>
      );
  }

}

export default App;
