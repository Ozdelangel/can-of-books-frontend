import { Component } from "react";
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

class LoginForm extends Component {






  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
      <>
<Modal.Dialog>
  <Modal.Body>
  <Form onSubmit={this.props.handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" id="email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Username" id="name"/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form>
  </Modal.Body>
</Modal.Dialog>
</>
    );
  }
};

export default LoginForm;
