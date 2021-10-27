import { Component } from 'react'
import { Button } from 'react-bootstrap'
import LoginForm from './LoginForm.js'

export default class LoginButton extends Component {

  render() {

    /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
    return(
      <>
      <Button onClick={this.props.onLogin}>Login</Button>
      {this.props.loginForm && <LoginForm loginForm={this.props.loginForm}/>}
      </>
    )
  }
}
