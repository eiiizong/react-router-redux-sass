import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import TopNav from '../../components/TopNav'

import './index.scss';

import axios from '../../utils/axios';
import qs from 'qs'

class DemandDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			info: {}
		}
	}
	componentWillMount () {
		console.log('detail =>', this.props)
	}
	componentDidMount () {
		const id = this.props.match.params.id
		this.requestAPI(id)
	}
	requestAPI (id) {
		const data = {
			id
		}
		const getDetail = () => {
			return axios.post('/list/detail', qs.stringify(data))
		}
		const getSystem = () => {
			return axios.post('/list/system')
		}
		axios.all([getDetail(), getSystem()]).then(axios.spread((acct, perms) => {
			if (acct.status === 200 && acct.data.status === '200') {
				if (perms.status === 200 && perms.data.status === '200') {
					const filed = perms.data.filed
					const info = acct.data.info
					const detailAttr = Object.keys(info)
					const filedAttr = Object.keys(filed)
					let arr = []
					let i = 0
					for (let detailIndex in detailAttr) {
						for (let filedIndex in filedAttr) {
							if (detailAttr[detailIndex] === filedAttr[filedIndex] && info[detailAttr[detailIndex]] && filed[filedAttr[filedIndex]]) {
								arr[i++] = {
									name: filed[filedAttr[filedIndex]],
									value: info[detailAttr[detailIndex]]
								}
							}
						}
					}
					this.setState({
						data: arr,
						info
					})
					console.log(info)
				}
			}
		}))
	}
	goBack = () => {
		const { history } = this.props
		history.goBack()
	}
	handleGoHome = () => {
		const { history } = this.props
		const url = {
			pathname: '/citylist'
		}
		history.push(url)
	}
	render () {
		const { data, info } = this.state
		return (
			<div className="demand-detail">
				<div className="top">
					<TopNav goBack={this.goBack} func={this.handleGoHome} title={info.name || info.carrier_name} rightText="回到首页" iconClassName="icon-home" />
					<div className="info">
						<div className="title">{info.name || info.carrier_name}</div>
						<div className="name">
							<span className="tag">{info.request_type || info.type}</span>
							<span>{info.contact_company || info.scene}</span>
						</div>
					</div>
				</div>
				<div className="content">
					<ul>
						{
							data.map((item, index) => {
								return (
									<li key={item + index}>
										<div className="left">
											<span>【{item.name}】</span>
										</div>
										<div className="right">
											<span>{item.value}</span>
										</div>
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		);
	}
}

export default DemandDetail;
