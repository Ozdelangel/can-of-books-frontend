import React from 'react';
import Books from './components/Books'
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

        {this.state.books.length ?  this.state.books.map((item,idx) => 
          <Books title={item.title} description={item.description} status={item.status} email={item.email}/>)
          : <h2>No Books Located</h2>}
        
      </>
    )
  }
}

export default BestBooks;
