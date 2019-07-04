import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';

import TopNav from '../../components/TopNav'
import SearchContainer from '../../containers/SearchContainer'

import axios from '../../utils/axios';
import getUrlParams from '../../utils/getUrlParams'
import qs from 'qs';

import './index.scss';

class DemandsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowSearch: false,
			rightText: '筛选',
			iconClassName: 'icon-filter',
			list: [],
			city: [],
			cate: [],
			page: 1,
			params: {},
			isShowLoadMore: true
		}
	}
	componentDidMount () {
		const params = getUrlParams(this.props.location.search)
		const { keyword, city_name, cate, nature, type, request_type, scene } = params;
		this.requestAPI(keyword, city_name, cate, nature, type, request_type, scene)
		this.setState({
			params
		})
	}
	requestAPI (keyword, city_name, cate, nature, type, request_type, scene) {
		const { page } = this.state
		const data = {
			keyword, city_name, cate, nature, type, request_type, scene, page
		}
		axios.post('/list/demand', qs.stringify(data)).then(res => {
			if (res.status === 200 && res.data.status === "200") {
				const { list } = res.data

				if (list.length >= 20) {
					this.setState({
						isShowLoadMore: true
					})
				} else {
					this.setState({
						isShowLoadMore: false
					})
				}

				if (page === 1) {
					this.setState({
						list
					})
				} else {
					this.setState({
						list: [...this.state.list, ...list]
					})
				}

				console.log(data)
			}
		})
	}
	// 请求搜索数据
	requestSystem () {
		axios.post('/list/system').then(res => {
			if (res.status === 200 && res.data.status === "200") {
				const data = res.data
				this.initCity(data.city)
				this.initCate(data.cate)
			}
		})
	}
	// 加载更多
	loadMore () {
		const { keyword, city_name, cate, nature, type, request_type, scene } = this.state.params;
		let { page } = this.state
		page++
		this.setState({
			page
		}, () => {
			this.requestAPI(keyword, city_name, cate, nature, type, request_type, scene)
		})
	}
	// 搜索
	currentPageSearch (keyword, city_name, cate, nature, type, request_type, scene) {
		console.log(keyword, city_name, cate, nature, type, request_type, scene)
		this.setState({
			isShowSearch: !this.state.isShowSearch,
			rightText: "筛选",
			iconClassName: 'icon-filter',
			page: 1
		}, () => {
			this.requestAPI(keyword, city_name, cate, nature, type, request_type, scene)
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
	linkToDeteil = (index) => {
		const { list } = this.state
		const url = {
			pathname: `/detail/${list[index].id}`,
		}
		this.props.history.push(url)
	}
	goBack = () => {
		console.log(this)
		const { history } = this.props
		history.goBack()
	}
	handleSearch = () => {
		const { isShowSearch } = this.state
		let rightText, iconClassName;
		if (!isShowSearch) {
			rightText = '关闭'
			iconClassName = ''
			this.requestSystem()
		} else {
			rightText = '筛选'
			iconClassName = 'icon-filter'
		}
		this.setState({
			isShowSearch: !isShowSearch,
			rightText,
			iconClassName
		})
	}
	render () {
		const { list, rightText, isShowSearch, iconClassName, city, cate } = this.state
		const { history } = this.props
		return (
			<div className="demand-list">
				<TopNav goBack={this.goBack} func={this.handleSearch} rightText={rightText} iconClassName={iconClassName} />
				{
					!isShowSearch ?
						<Fragment>
							<div className="content">
								{
									list.map((item, index) => {
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
								{
									this.state.isShowLoadMore ?
										<div className="show-more" onClick={this.loadMore.bind(this)}>下拉加载更多</div>
										: <div className="show-more" >没有更多可加载了</div>
								}

							</div>
						</Fragment>
						: <SearchContainer history={history} city={city} cate={cate} isLinkToOtherPages={false} currentPageSearch={this.currentPageSearch.bind(this)}></SearchContainer>
				}
			</div>
		);
	}
}

export default DemandsList;
