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
      status: event.target.status.value,
      email: this.props.email,
      
    }
    this.props.closeModal();
    this.props.handlePost(newObj);
    
  }

  render() {
    return(
      <>
      <Modal show={this.props.modalState}>
        <Modal.Dialog>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Book Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" id="title" />
              </Form.Group>
              <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Status</Form.Label>
              <Form.Control as="select" custom id="status">
                <option>AVAILABLE</option>
                <option>NOT AVAILABLE</option>
              </Form.Control>
            </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Book Description</Form.Label>
                <Form.Control as="textarea" rows={3} id="description" />
              </Form.Group>
              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
        </Modal>
      </>
    )
  }
}

export default AddBook;
