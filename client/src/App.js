import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SessionHelper from "./helpers/SessionHelper";
import AppContext from './context/AppContext';
import Login from './pages/Login';
import SingleUser from "./pages/SingleUser";
import Users from "./pages/Users";
import Default from "./layouts/Default";
import NotFound from "./pages/NotFound";


class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          isAuth: SessionHelper.isAuth(),
          user: null,
      };
  }

  render() {
      return(
          <AppContext.Provider value={this.state}>
            <Router>
                {/* List of routes not need auth */}
                { !this.state.isAuth ?<Route exact path="/" component={Login}/> : '' }
                {/* List of route which need auth */}
                { this.state.isAuth ?
                    <div className={'lazy-wrapper-dft'}>
                        <Route exact path="/" component={ () => <Default content={SessionHelper.hasRole('student') ? <SingleUser/> : <Users/>} /> }/>
                        <Route exact path="/profile" component={ () => <Default content={<SingleUser/>} /> }/>
                        <Route exact path="/login" component={Login}/>
                        <Route path={'*'} exact={true} component={NotFound}/>
                    </div>
                : '' }
            </Router>
          </AppContext.Provider>
          
      );
  }

}

export default App;
