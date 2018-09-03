import React, { Component } from 'react';
import Footer from './components/Footer';
import Qianggou from './components/Qianggou'
var bw = (document.documentElement.clientWidth/11.65)+"px";
var htmlTag = document.getElementsByTagName("html")[0];
htmlTag.style.fontSize=bw;

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
