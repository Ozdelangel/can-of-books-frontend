import { Component } from "react";
import { withAuth0 } from '@auth0/auth0-react'; 

class Profile extends Component {

  render() {
    /* TODO: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */
    return( 
      <>
    <img src='https://via.placeholder.com/150'alt="Pic"/>
    <p> Name: {this.props.auth0.user.name} </p>
    <p> Email: {this.props.auth0.user.email}</p>
    </>
    )
  }
};

export default withAuth0(Profile);
