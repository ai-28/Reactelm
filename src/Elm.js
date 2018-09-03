import React, { Component } from 'react';
import Footer from './components/Footer';
import Qianggou from './components/Qianggou'
import Sellerhead from './components/Sellerhead';
import Seller from './components/Seller';

var bw = (document.documentElement.clientWidth/11.65)+"px";
var htmlTag = document.getElementsByTagName("html")[0];
htmlTag.style.fontSize=bw;


class Elm extends Component {
  render(){
    return(
      <div>
        <h1>hello</h1>
        <Qianggou />
        
        <Sellerhead />
        <Seller />
        <Seller />
        <Seller />
        <Footer />
      </div>
    );
  }
}

export default Elm;
