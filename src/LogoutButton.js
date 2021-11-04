import React from 'react';
import { Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react'; 

class LogoutButton extends React.Component {

  render() {
    return (
      
      <Button onClick={() => this.props.auth0.logout({ returnTo: window.location.origin })}>
        Logout
      </Button>
    );
  }
};

export default withAuth0(LogoutButton);
