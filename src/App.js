import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import BestBooks from './BestBooks.js';
import Profile from './Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loginForm: null,
      email: '',
      userName:''
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
      loginForm:'10',
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} onLogin={this.loginHandler} loginForm={this.state.loginForm} email={this.state.email} userName={this.state.userName}/>
          
          <Switch>
            <Route exact path="/">
              <BestBooks/>
            </Route>
            <Route exact path="/profile">
              <Profile/>
            </Route>
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            
          </Switch>
          
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
