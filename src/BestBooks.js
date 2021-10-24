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
    let bookURl = `http://localhost:3001/books`;
    
    axios.get(bookURl)
    .then(bookObj => bookObj.data)
    .then(data => this.setState({books:data}))
     
  
    
    
      .catch(error => console.log('error', error.message));
      
    
  }
  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ?  this.state.books.map((item,idx) => {
          // <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
          
    
        </Carousel>
        })
          (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
        
      </>
    )
  }
}

export default BestBooks;
