import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import './LoginButton';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {this.props.user && <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>}
        <NavItem><LoginButton onLogin={this.props.onLogin}/></NavItem>
        {this.props.user && <NavItem><LogoutButton onLogout={this.props.onLogout}/></NavItem>}
      </Navbar>
    )
  }
}

export default Header;
