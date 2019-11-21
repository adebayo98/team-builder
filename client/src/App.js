import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';
import SingleUser from "./pages/SingleUser";
import Users from "./pages/Users";
import SessionHelper from "./helpers/SessionHelper";
import DefaultLayout from "./layouts/Default";


class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          isAuth: SessionHelper.isAuth(),
      };
  }

  render() {
      return(
          <Router>
              {/* List of routes not need auth */}
              { !this.state.isAuth ? <Route exact path="/" component={Login}/> : '' }

              {/* List of route which need auth */}
              { this.state.isAuth ?
                  <div className={'lazy-wrapper-dft'}>
                      <Route exact path="/" component={ () => <DefaultLayout content={SessionHelper.hasRole('student') ? SingleUser : Users} /> }/>
                      <Route exact path="/profile" component={ () => <DefaultLayout content={SingleUser} /> }/>
                      <Route exact path="/login" component={ () => <DefaultLayout content={Login} /> }/>
                  </div>
              : '' }
          </Router>
      );
  }

}

export default App;
