import React, { Component } from 'react';

import seimgh from '../img/e4_p1.jpg'
import seimg from '../img/e4_p3.jpg'
import seimgk from '../img/e4_p2.jpg'


class Seller extends Component {
	
	
	render(){
		return(
			<div class='sellbigbox'>
				
				<div class="sellerbox">
					<img src={seimgh}/>
						<div class="sellerboxtp">
							<em>品牌</em><h2>德克士（京广路店）</h2><em>票</em>
						</div>
						<div class="sellerboxsm">
							<img src={seimg}/><span>4.8月售453单</span>
						</div>
						
						<div class="sellerboxft">
							<span>￥0起送&nbsp;<em>|</em>&nbsp;配送费￥5</span>
							<span>865m&nbsp;<em>|</em>&nbsp;32分钟</span>
						</div>	
						<div class="sellerboxlt">
							<strong>汉堡</strong><img src={seimgk}/><p>口碑人气好店</p>
						</div>
						<div class="sellersbox">
							<div class="sellbgbox">
								<span>首</span><p>新用户下单立减25元</p>
							</div>
							
							<div class="sellsmbox">
								<span>减</span><p>满40减20，满50减25，满60减34</p>
							</div>
							
						</div>
				</div>
				
			
			
			
			
			</div>
		)
	}
	
}


export default Seller;