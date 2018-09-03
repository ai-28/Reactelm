import React, { Component } from 'react';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Header from './components/Header';

class Elm extends Component {
  render(){
    return(
      <div>
        <Header/>
        <Menu/>
        <Footer />
      </div>
    );
  }
}

export default Elm;
