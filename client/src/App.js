import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
      };
  }

  render() {
      return(
          <Router>
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Login} />
              {/*<Route exact path="/signin" component={() => <SingleFormLayout content={<SignInView/>} />} />*/}
          </Router>
      );
  }

}

export default App;
