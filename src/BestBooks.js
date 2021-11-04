import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import AddBook from './AddBook';
import UpdateBook from './UpdateBook';
import { Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react'; 
import { Container } from 'react-bootstrap';



class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      
    }
  }
  

 async componentDidMount() {

  let getIdToken = await this.props.auth0.getIdTokenClaims();
  let jwt = getIdToken.__raw

  console.log(jwt);
  let config = {
    headers: { "Authorization": `Bearer ${jwt}` }
  }


    let bookURl = `http://localhost:3001/books`;
    
    axios.get(bookURl, config)
    .then(bookObj => bookObj.data)
    .then(data => this.setState({books:data}))
  
    .catch(error => console.log('error', error.message));
  }
  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  handlePost = async (newBook) => {
    console.log(newBook);
    // let URL = `http://localhost:3001/books?email=${newBook.email}&title=${newBook.title}&description=${newBook.description}&status=${newBook.status}`;
    let URL = `http://localhost:3001/books`
    let postRes = await axios.post(URL, newBook);
    console.log('postRes', postRes.data);
    this.setState({ books: [...this.state.books, postRes.data],
                  newBook:false,
                  user: '1', });
    this.componentDidMount();
  }

  handleDelete = async (bookId) =>{
    let URL = `http://localhost:3001/books/${bookId}`
    console.log(bookId);
    let deletedBook = await axios.delete(URL);
    let deletedBookData = deletedBook.data;
    console.log(deletedBookData);
    let copyState = this.state.books
    let filteredData = copyState.filter((item) => item._id !== deletedBookData._id);
    this.setState({books: filteredData});
  }

  handleUpdate = async (itemObj) =>{
    console.log(itemObj);
    let URL = `http://localhost:3001/books/${itemObj._id}`;
    
    let putObj = {
      title: itemObj.title,
      description: itemObj.description,
      status: itemObj.status,
      email: itemObj.email
    }
    let updateRes = await axios.put(URL, putObj);
    let updatedData = updateRes.data;
    console.log(updatedData);
    let copyState = this.state.books.map((books, idx) => {
      if(books._id === updatedData._id) return updatedData;
      else {return books}
    })
    this.setState({
      book: copyState,
    })
    this.componentDidMount();

  }

  runUpdateForm = (item) => {
    this.props.updateformHandler(item)
  }



  render() {

    /* TODO: render user's books in a Carousel */

    console.log(this.state.books);
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.props.newBook && <AddBook email={this.props.email} closeModal={this.props.closeModal} modalState={this.props.modalState} handlePost={this.handlePost} newBook={this.props.newBook}/>}
         {this.props.updateForm && <UpdateBook showUpdate={this.props.showUpdate} closeUpdate={this.props.closeUpdate} handleUpdate={this.handleUpdate} updatedObj={this.props.updatedObj}/>}
        <Container>
          <Carousel className="w-responsive text-center mx-auto p-3 mt-2">
            {this.state.books.length > 0 ?  this.state.books.map(item => 
              <Carousel.Item key ={item._id}>
                <img
                className="w-75"
                src='https://via.placeholder.com/150'
                alt="First slide"
              />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <h5>{item.email}</h5>
              <Button variant="danger" onClick={() => {this.handleDelete(item._id)}}>Delete</Button>
              <Button onClick={() => {this.runUpdateForm(item)}}>Update</Button>
            </Carousel.Caption>
            </Carousel.Item>
            )
            : <h2>No Books Located</h2>}
          </Carousel>
        </Container>
      </>
    )
  }
}

export default withAuth0(BestBooks);
