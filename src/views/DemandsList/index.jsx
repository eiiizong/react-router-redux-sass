import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';

import TopNav from '../../components/TopNav'

import axios from '../../utils/axios';

import './index.scss';

class DemandsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			country: []
		}
	}
	componentDidMount () {
		this.requestAPI()
	}
	requestAPI () {
		axios.post('/list/system').then(res => {
			if (res.status === 200 && res.data.status === "200") {
				const data = res.data
				this.setState({
					country: data.country
				})
			}
		})
	}
	render () {
		return (
			<div className="demand-list">
				<TopNav></TopNav>
				<Fragment>
					<div className="content">
						{
							[1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 11,].map((item, index) => {
								return (
									<div className="list-item" key={index}>
										<div className="title">郫都区万云汇互联网娱乐云计算产业基地项目郫都区万云汇互联网娱乐云计算产业基地项目</div>
										<div className="info">
											<span className="tag">融资需求</span>
											<span>成都国民沃成半导体有限公司成都国民沃成半导体有限公司</span>
										</div>
									</div>
								)
							})
						}
						<div className="show-more">
							下拉加载更多
						</div>
					</div>
				</Fragment>
			</div>
		);
	}
}

export default DemandsList;
