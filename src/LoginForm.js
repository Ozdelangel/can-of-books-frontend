import { Component } from "react";
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";
class LoginForm extends Component {

handleSubmit = (e) => {
  console.log('click');
  this.setState({email:e.target.email.value, userName:e.target.name.value, loginForm:null});
  // console.log(e.target.);


}





  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
      <>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label for='email'>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" id='email'/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label for='name'>User Name</Form.Label>
    <Form.Control type="Name" placeholder="User Name" id='name'/>
  </Form.Group>
  
  <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
    Submit
  </Button>
</Form>
</>
    );
  }
};

export default LoginForm;
