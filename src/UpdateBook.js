import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class UpdateBook extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('click');
    
    let newObj = {
      title: (event.target.title.value) ? event.target.title.value : this.props.updatedObj.name,
      description: (event.target.description.value) ? event.target.description.value : this.props.updatedObj.description,
      status: (event.target.status.value) ? event.target.status.value : this.props.updatedObj.status,
      email: this.props.updatedObj.email,
      _id: this.props.updatedObj._id
    }
    this.props.closeUpdate();
    this.props.handleUpdate(newObj);
    
  }

  

  render() {
    return(
      <>
      <Modal show={this.props.showUpdate}>
        <Modal.Dialog>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Update Book Title</Form.Label>
                <Form.Control type="text" defaultValue={this.props.updatedObj.title} id="title" />
              </Form.Group>
              <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Update Status</Form.Label>
              <Form.Control as="select" custom id="status" defaultValue={this.props.updatedObj.status} >
                <option>AVAILABLE</option>
                <option>NOT AVAILABLE</option>
              </Form.Control>
            </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Update Book Description</Form.Label>
                <Form.Control as="textarea" rows={3} id="description" defaultValue={this.props.updatedObj.description}  />
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

export default UpdateBook;
