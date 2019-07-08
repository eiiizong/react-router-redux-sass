import React, { Component } from 'react';
// import { CSSTransition } from 'react-transition-group';

import { Link } from 'react-router-dom';
// import axios from '../../utils/axios';

import './index.scss';

import logoIMG from '../../assets/images/logo-big.png'
import contentIMG01 from '../../assets/images/index-01.jpg'

class Home extends Component {
	constructor(props) {
		super(props)
		this.duration = 500
		this.state = {}
	}
	func () {

	}
	componentDidMount () {
		// console.log(this.props)
	}
	render () {
		return (
			<div className="home">
				<div className="title">
					<div className="left">
						<i className="icon"></i>
						<span>城市机会</span>
					</div>
					<div className="right">
						<img src={logoIMG} alt="logo" />
					</div>
				</div>
				<div className="content animated pulse">
					<div>
						<p>本次发布的城市机会清单运用场景逻辑梳理整合成都以及国际友城、兄弟城市的发展机遇，激励引导优秀企业在经济全球化进程中实现价值、赢得发展。本批次城市机会清单注重打造应用场景，促进示范推广；注重完善对接机制，强化精准服务；注重链接全球发展，服务对外开放；注重突出“主干”作用，推动区域协同。本批次城市机会清单共发布764条供需信息，其中，成都城市机会清单涉及服务实体经济、乡村振兴、智慧城市、东部新城等11个应用场景共651条供需信息；德阳、眉山、资阳3个省内兄弟城市共发布74条供需信息；20个国际城市（地区）共发布39条供需信息。</p>
						<p>成都将以更加开放包容的姿态走向时代前沿，致力于把城市机会清单塑造成为国际化、多元化、平台化的城市品牌，链接全球发展机遇、深化城市交流合作、促进企业创新发展，奋力建设面向世界的城市机会集散地和新经济创新策源地，打造共建人类命运共同体的合作交流高地。</p>
					</div>
					<div>
						<img src={contentIMG01} alt="content img" />
					</div>
					<button>
						<Link to="/citylist">立即进入</Link>
					</button>
				</div>
			</div>
		);
	}
}

export default Home;
