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
			info: [
				{
					id: 0,
					title: '需求需要',
					desc: '利用现有厂房62333.49平米，项目总投资1亿元，将建成3条产线1.6吋单晶碳化硅单晶衬底研发线年产6吋碳化硅衬底2000 片2.6外延片生产线：6寸氮化镓外延片 2万片/年8英寸Si-GaN（功率电子+LED）1万片/年；6 英寸 GaAS+GaN1 万片/年 150000'
				},
				{
					id: 88,
					title: '需求需要',
					desc: '利用现有厂房62333.49平米，项目总投资1亿元，将建成3条产线1.6吋单晶碳化硅单晶衬底研发线年产6吋碳化硅衬底2000 片2.6外延片生产线：6寸氮化镓外延片 2万片/年8英寸Si-GaN（功率电子+LED）1万片/年；6 英寸 GaAS+GaN1 万片/年 150000'
				},
				{
					id: 99,
					title: '需求需要',
					desc: '利用现有厂房62333.49平米，项目总投资1亿元，将建成3条产线1.6吋单晶碳化硅单晶衬底研发线年产6吋碳化硅衬底2000 片2.6外延片生产线：6寸氮化镓外延片 2万片/年8英寸Si-GaN（功率电子+LED）1万片/年；6 英寸 GaAS+GaN1 万片/年 150000'
				},
				{
					id: 1,
					title: '总投资额',
					desc: '150000万元 '
				},
				{
					id: 2,
					title: '融资需求',
					desc: '5000万元 '
				},
				{
					id: 3,
					title: '联系方式',
					desc: '成都国民天成半导体有限公司',
					contact: '张站峰  13880813191'
				},
				{
					id: 4,
					title: '建设模式',
					desc: '政府和企业出资共建'
				}
			]
		}
	}
	componentWillMount () {
		console.log('detail =>', this)
	}
	componentDidMount () {
		this.requestAPI()
	}
	requestAPI () {
		const data = {
			id: 200
		}

		axios.post('/list/detail', qs.stringify(data)).then(res => {
			if (res.status === 200 && res.data.status === "200") {
				// const data = res.data
				// this.setState({
				// 	info: data.info
				// })
			}
		})
	}
	render () {
		const info = this.state.info
		// const data = Object.keys(info)
		// console.log(data)
		return (
			<div className="demand-detail">
				<div className="top">
					<TopNav />
					<div className="info">
						<div className="title">郫都区万云汇互联网娱乐云计算产业基地项目</div>
						<div className="name">
							<span className="tag">融资需求</span>
							<span>成都国民沃成半导体有限公司</span>
						</div>
					</div>
				</div>
				<div className="content">
					<ul>
						{
							info.map((item, index) => {
								return (
									<li key={item.id}>
										<div className="left">
											<span>【{item.title}】</span>
										</div>
										<div className="right">
											<span>{item.desc}</span>
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
