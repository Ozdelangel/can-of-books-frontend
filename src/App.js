import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import BestBooks from './BestBooks.js';
import Profile from './Profile';
import LoginForm from './LoginForm';
import AddBook from './AddBook';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';

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

  loginHandler = () => {
    this.setState({
      loginForm: '1',
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('click');
    this.setState({
      email: event.target.email.value,
      userName: event.target.name.value,
      loginForm: null,
      user:'1',
        })
  }

  render() {
    console.log(this.state);
    return (
      
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} onLogin={this.loginHandler} loginForm={this.state.loginForm} email={this.state.email} userName={this.state.userName}/>
          {this.state.loginForm && <LoginForm handleSubmit={this.handleSubmit} />}
          <Switch>
            <Route exact path="/">
              {this.state.user && <BestBooks/>}
            </Route>
            <Route exact path="/profile">
              <Profile email={this.state.email} userName={this.state.userName}/>
            </Route>
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            <Route exact path="/">
              <AddBook email={this.state.email} />
            </Route>
          </Switch>
          
          <Footer />
        </Router>
      </>
    )
    
  }
}

export default App;
