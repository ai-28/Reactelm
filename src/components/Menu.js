import React, { Component } from 'react';
import m1 from '../img/e2_p1.jpg';
import m2 from '../img/e2_p2.jpg';
import m3 from '../img/e2_p3.jpg';
import m4 from '../img/e2_p4.jpg';
import m5 from '../img/e2_p5.jpg';
import m6 from '../img/e2_p6.jpg';
import m7 from '../img/e2_p7.jpg';
import m8 from '../img/e2_p8.jpg';
import m9 from '../img/e2_p9.jpg';
import m10 from '../img/e2_p10.jpg';

class Menu extends Component {
    render(){
        return(
            <div class="menu">
            <ul>
            <li>
            <img src={m1}/>
            <span>美食</span>
            </li>
            <li>
            <img src={m2}/>
            <span>晚餐</span>
            </li>
            <li>
            <img src={m3}/>
            <span>商超便利</span>
            </li>
            <li>
            <img src={m4}/>
            <span>水果</span>
            </li>
            <li>
            <img src={m5}/>
            <span>医药健康</span>
            </li>
            </ul>
            <ul>
            <li>
            <img src={m6}/>
            <span>浪漫鲜花</span>
            </li>
            <li>
            <img src={m7}/>
            <span>厨房生鲜</span>
            </li>
            <li>
            <img src={m8}/>
            <span>跑腿代购</span>
            </li>
            <li>
            <img src={m9}/>
            <span>地方小吃</span>
            </li>
            <li>
            <img src={m10}/>
            <span>麻辣烫</span>
            </li>
            </ul>
            </div>
    );
    }
}

export default Menu;