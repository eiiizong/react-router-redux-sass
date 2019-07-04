import React, { Component } from 'react';
import './index.scss';

class NotFound extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	componentDidMount () {
		console.log(this)
	}
	render () {
		return (
			<div className="not-found">
				404 NotFound
			</div>
		);
	}
}

export default NotFound;
