import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/styles/style.scss';
/* VIEWS */

// import HomeView from './views/HomeView';
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
                {/* <HomeView /> */}
                <ProfileView />
              </Route>
          </Router>
      );
  }

}

export default App;
