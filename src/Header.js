import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './Header.css';
import './LoginButton';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react'; 


class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {this.props.auth0.isAuthenticated && <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>}
        {this.props.auth0.isAuthenticated && <NavItem><Button onClick={this.props.newbookHandler}>Add Book</Button></NavItem>}
        {this.props.auth0.isAuthenticated ? <NavItem><LogoutButton onLogout={this.props.onLogout}/></NavItem>:
        <NavItem> <LoginButton onLogin={this.props.onLogin} loginForm={this.props.loginForm} email={this.props.email} userName={this.props.userName}/></NavItem> }
      </Navbar>
    )
  }
}

export default withAuth0(Header);
