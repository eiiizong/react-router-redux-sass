import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux';

import TopNav from '../../components/TopNav';
import SmallCard from '../../components/SmallCard';
import SearchContainer from '../../containers/SearchContainer';

import axios from '../../utils/axios';
import getUrlParams from '../../utils/getUrlParams';
import qs from 'qs'

import './index.scss';
import logoIMG from '../../assets/images/logo-big.png'

class DemandTypeList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city_name: '',
			// 1 需求 2 供给
			type: 1,
			country: [],
			demand_cnt: 0,
			demand_list: [],
			supply_cnt: 0,
			supply_list: [],
			isShowSearch: false,
			rightText: '筛选',
			iconClassName: 'icon-filter',
			city: [],
			cate: []
		}
	}
	linkToDemandList = () => {
		const { city_name, type } = this.state
		let url, pathname;
		if (city_name === '成都市' && type === 1) {
			pathname = `/choice?type=${type}&city_name=${city_name}`
		} else {
			pathname = `/list?type=${type}&city_name=${city_name}`
		}
		url = { pathname }
		this.props.history.push(url)
	}

	componentDidMount () {
		const param = this.props.location.search;
		const params = getUrlParams(param)
		let { city_name } = params
		this.requestAPI(city_name)

		this.setState({
			city_name
		})
	}
	initCity = (city) => {
		const arr = city.map(item => {
			return {
				name: item,
				checked: false
			}
		})
		this.setState({
			city: arr
		})
	}
	initCate = (cate) => {
		const arr = cate.map(item => {
			return {
				name: item,
				checked: false
			}
		})
		this.setState({
			cate: arr
		})
	}
	changeNav = (index) => {
		const type = index + 1
		this.setState({
			type
		})
	}

	handleTopNav = () => {
		let rightText
		let iconClassName
		if (!this.state.isShowSearch) {
			rightText = '关闭'
			iconClassName = ''
			this.requestSystemAPI()

		} else {
			rightText = '筛选'
			iconClassName = 'icon-filter'
		}
		this.setState({
			isShowSearch: !this.state.isShowSearch,
			rightText,
			iconClassName,
		})
	}

	goBack = () => {
		const { history } = this.props
		history.goBack()
	}
	requestAPI (cityName) {
		const data = {
			'city_name': cityName
		}
		axios.post('/list/city', qs.stringify(data)).then(res => {
			if (res.status === 200 && res.data.status === "200") {
				const { demand_cnt, demand_list, supply_cnt, supply_list } = res.data
				this.setState({
					demand_cnt,
					demand_list,
					supply_cnt,
					supply_list
				})
				console.log(res.data)
			}
		}).catch(err => {
			console.log(err)
		})
	}
	requestSystemAPI (cityName) {
		axios.post('/list/system').then(res => {
			if (res.status === 200 && res.data.status === "200") {
				this.initCity(res.data.city)
				this.initCate(res.data.cate)
				console.log(res.data)
			}
		}).catch(err => {
			console.log(err)
		})
	}
	render () {
		let data;
		const { type, city, cate } = this.state
		const { history } = this.props

		if (type === 1) {
			data = this.state.demand_list
		} else {
			data = this.state.supply_list
		}
		return (
			<div className="demand-type-list">
				<div className="header">
					<TopNav iconClassName={this.state.iconClassName} rightText={this.state.rightText} func={this.handleTopNav} goBack={this.goBack}></TopNav>
				</div>
				<div className="content">
					{
						this.state.isShowSearch ?
							<SearchContainer history={history} city={city} cate={cate} isLinkToOtherPages={true}></SearchContainer> :
							<Fragment>
								<div className="top">
									<div className="img-wrapper">
										<img src={logoIMG} alt="logo" />
									</div>
									<div className="nav">
										<ul>
											<li className={type === 1 ? 'active' : ''} onClick={this.changeNav.bind(this, 0)}>
												<div className="link">
													<span className="bg"></span>
													<span>需求清单({this.state.demand_cnt})</span>
												</div>
											</li>
											<li className={type === 2 ? 'active' : ''} onClick={this.changeNav.bind(this, 1)}>
												<div className="link">
													<span className="bg"></span>
													<span>供给清单({this.state.supply_cnt})</span>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className="main">
									<div className="card-wrapper">
										{
											data.map((item, index) => {
												return (
													<div className="card-item" key={item.cate + index}>
														<SmallCard data={item} linkToDemandList={this.linkToDemandList}></SmallCard>
													</div>
												)
											})
										}
									</div>
								</div>
							</Fragment>
					}
				</div>
			</div>
		);
	}
}

export default DemandTypeList
