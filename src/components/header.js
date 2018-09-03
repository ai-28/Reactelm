import React, { Component } from 'react';
import p1 from '../img/h1.jpg';

class Header extends Component {
    render(){
        return(
            <div className="header">
            <div className="header_select">
            <img src={p1}/>
            <select>
            <option value="海为科技园" selected>海为科技园</option>
        </select>
        </div>
        <div className="header_input">
            <input type="text" placeholder="搜索饿了吗商家、商品名称"/>
            </div>
            </div>
    );
    }
}

export default Header;