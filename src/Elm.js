import React, { Component } from 'react';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Header from './components/Header';
var bw = (document.documentElement.clientWidth/11.65)+"px";
var htmlTag = document.getElementsByTagName("html")[0];
htmlTag.style.fontSize=bw;

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
