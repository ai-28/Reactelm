import React, { Component } from 'react';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Header from './components/Header';
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
        <Header/>
        <Menu/>
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
