import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return(
    	<footer>
    			<div className="foot_active">
    				<i className="iconfont icon-home"></i>
    				<span>首页</span>
    			</div>
    			<div>
    				<i className="iconfont icon-about"></i>
    				<span>发现</span>
    			</div>
    			<div>
    				<i className="iconfont icon-other"></i>
    				<span>订单</span>
    			</div>
    			<div>
    				<i className="iconfont icon-about"></i>
    				<span>我的</span>
    			</div>
    	</footer>
    );
  }
}

export default Footer;