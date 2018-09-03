import React, { Component } from 'react';
import imgs from '../img/qianggou2.jpg'
import imgs2 from '../img/e3_p2.jpg'
import imgs3 from '../img/e3_p3.jpg'
class Qianggou extends Component {
  render(){
    return(
      <div>
       	<div id="qg-box1">
       		<div id="qg-box2">
       			<h3>品质套餐</h3>
       			<p>搭配齐全吃得好</p>
       			<p id="p2">立即抢购&gt;</p>
       			<img src={imgs}/>
       		</div>
       		<div id="qg-box3">
       			<h3>限量抢购</h3>
       			<p>超值美味9.9元起</p>
       			<p id="p2">1499人正在抢&gt;</p>
       			<img src={imgs2}/>
       		</div>
       		
       	</div>
       	<div id="qg-box4">
       			<img src={imgs3}/>
       	</div>
      </div>
    );
  }
}

export default Qianggou;