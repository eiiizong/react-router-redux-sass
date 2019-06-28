import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';

import TopNav from '../../components/TopNav'

import axios from '../../utils/axios';
import qs from 'qs';

import './index.scss';

class DemandsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}
	componentDidMount () {
		this.requestAPI()
	}
	requestAPI () {
		const data = {

		}
		axios.post('/list/demand', qs.stringify(data)).then(res => {
			if (res.status === 200 && res.data.status === "200") {
				const data = res.data
				this.setState({
					list: data.list
				})
				console.log(data)
			}
		})
	}
	linkToDeteil = (index) => {
		const url = {
			pathname: '/detail',
			param: {
				id: this.state.list[index].id
			}
		}
		this.props.history.push(url)
	}
	render () {
		const data = this.state.list
		return (
			<div className="demand-list">
				<TopNav></TopNav>
				<Fragment>
					<div className="content">
						{
							data.map((item, index) => {
								return (
									<div className="list-item" key={item.id} onClick={this.linkToDeteil.bind(this, index)}>
										<div className="title">{item.name || item.carrier_name}</div>
										<div className="info">
											<span className="tag">{item.request_type || item.type}</span>
											<span>{item.contact_company || item.scene}</span>
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
