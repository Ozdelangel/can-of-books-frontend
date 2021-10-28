import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class AddBook extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('click');
    
    let newObj = {
      title: event.target.title.value,
      description: event.target.description.value,
      email: this.props.email,
      
    }
    
    this.props.handlePost(newObj);
    
  }

  render() {
    return(
      <>
        <Modal.Dialog>
          <Modal.Body>
            <Form onSubmit={this.props.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Book Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" id="title" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Book Description</Form.Label>
                <Form.Control as="textarea" rows={3} id="description" />
              </Form.Group>
              <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Modal.Body>
      </Modal.Dialog>
      </>
    )
  }
}

export default AddBook;
