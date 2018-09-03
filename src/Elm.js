import React, { Component } from 'react';
import Footer from './components/Footer';
import Seller from './components/Seller';

class Elm extends Component {
  render(){
    return(
      <div>
        <h1>hello</h1>
        <Seller />
        <Footer />
      </div>
    );
  }
}

export default Elm;
