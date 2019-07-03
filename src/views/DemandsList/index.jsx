import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';

import TopNav from '../../components/TopNav'
import Search from '../../components/Search'

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
			list: []
		}
	}
	componentDidMount () {
		const params = getUrlParams(this.props.location.search)
		const { city_name, type, nature, scene, ruquest_type, cate, keyword } = params;
		this.requestAPI(city_name, type, nature, scene, ruquest_type, cate, keyword)
	}
	requestAPI (city_name, type, nature, scene, ruquest_type, cate, keyword, page = 1) {
		const data = {
			city_name, type, nature, scene, ruquest_type, cate, keyword, page
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
		const { list, rightText, isShowSearch, iconClassName } = this.state
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
									list.length >= 20 ?
										<div className="show-more">下拉加载更多</div>
										: null
								}

							</div>
						</Fragment>
						: <Search></Search>
				}
			</div>
		);
	}
}

export default DemandsList;
