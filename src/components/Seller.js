import React, { Component } from 'react';


class Seller extends Component {
	
	
	render(){
		return(
			<div>
				<h2 id="sellerh2">-推荐商家-</h2>
				<div class="sellertop">
					<p>综合排序</p>
					<p>距离最近</p>
					<p>品质联盟</p>
					<p>筛选</p>
				</div>
				<div class="sellerbox">
					<img src=""/>
						<div class="sellerboxtp">
							<em>品牌</em><h2>德克士（京广路店）</h2><em>票</em>
						</div>
						<div class="sellerboxsm">
							<span>4.8月售453单</span>
						</div>
						
						<div class="sellerboxft">
							<span>￥0起送&nbsp;<em>|</em>&nbsp;配送费￥5</span>
							<span>865m&nbsp;<em>|</em>&nbsp;32分钟</span>
						</div>	
						<div class="sellerboxlt">
							<strong>汉堡</strong><p>口碑人气好店</p>
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