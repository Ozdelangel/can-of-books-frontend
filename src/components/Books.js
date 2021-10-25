import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Books extends React.Component {
    render(){
        return(
        <>
                <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      

    </Carousel>
        </>
    )    
}
}

export default Books;