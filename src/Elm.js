import React, { Component } from 'react';
import Footer from './components/Footer';
var bw = (document.documentElement.clientWidth/11.65)+"px";
var htmlTag = document.getElementsByTagName("html")[0];
htmlTag.style.fontSize=bw;

class Elm extends Component {
  render(){
    return(
      <div>
        <h1>hello</h1>
        <Footer />
      </div>
    );
  }
}

export default Elm;
