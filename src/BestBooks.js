import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  

  componentDidMount() {
    let bookURl = `http://localhost:3001/books?email=cwrarig20@gmail.com`;
    
    axios.get(bookURl)
    .then(bookObj => bookObj.data)
    .then(data => this.setState({books:data}))
  
    .catch(error => console.log('error', error.message));
  }
  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  render() {

    /* TODO: render user's books in a Carousel */
    console.log(this.state.books);
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Carousel>
        {this.state.books.length > 0 ?  this.state.books.map(item => 
          
                          <Carousel.Item key ={item._id}>
                              <img
                                className="d-block w-100"
                                src='https://via.placeholder.com/150'
                                alt="First slide"
                              />
                            <Carousel.Caption>
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>
                              <h5>{item.email}</h5>
                            </Carousel.Caption>
                          </Carousel.Item>
                          
                        )
          : <h2>No Books Located</h2>}
          </Carousel>
        
      </>
    )
  }
}

export default BestBooks;
