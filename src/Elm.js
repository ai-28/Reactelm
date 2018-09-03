import React, { Component } from 'react';
import Footer from './components/Footer';
import Qianggou from './components/Qianggou'
class Elm extends Component {
  render(){
    return(
      <div>
        <h1>hello</h1>
        <Qianggou />
        <Footer />
      </div>
    );
  }
}

export default Elm;
