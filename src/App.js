import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import BestBooks from './BestBooks.js';
import Profile from './Profile';
import LoginForm from './LoginForm';
import { withAuth0 } from '@auth0/auth0-react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      updatedObj: {},
      user: null,
      loginForm: null,
      email: '',
      userName:'',
      newBook: false,
      modalState: false,
      showUpdate: false,
      updateForm: false,
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
    console.log('submitted');
    this.setState({
      email: event.target.email.value,
      userName: event.target.name.value,
      loginForm: null,
      user:'1',
        })
  }

  newbookHandler = () => {
    this.setState({
      newBook: true,
      modalState:true
    })
    console.log('click');
  }

  closeModal = () => {
    this.setState({
      modalState: false,
    })
  }

  updateformHandler = (itemObj) => {
    this.setState({
      showUpdate: true,
      updateForm: true,
      updatedObj: itemObj,
    })
    console.log(itemObj);
  }

  closeUpdate = () => {
    this.setState({
      showUpdate: false,
    })
  }

  render() {
    console.log(this.state);
    return (
      
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} onLogin={this.loginHandler} loginForm={this.state.loginForm} email={this.state.email} userName={this.state.userName} newbookHandler={this.newbookHandler}/>
          {this.state.loginForm && <LoginForm handleSubmit={this.handleSubmit} />}
          <Switch>
            <Route exact path="/">
            {this.props.auth0.isAuthenticated ? <BestBooks updatedObj={this.state.updatedObj} updateForm={this.state.updateForm} showUpdate={this.state.showUpdate} closeUpdate={this.closeUpdate} updateformHandler={this.updateformHandler} closeModal={this.closeModal}  modalState={this.state.modalState} newbookHandler={this.newbookHandler} email={this.state.email} newBook={this.state.newBook} user={this.state.user}/>
            : ''}
            </Route>
            <Route exact path="/profile">
              <Profile email={this.state.email} userName={this.state.userName}/>
            </Route>
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            
          </Switch>
          <Footer />
        </Router>
      </>
    )
    
  }
}

export default withAuth0(App); 
