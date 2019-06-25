import React, { Component } from 'react';
import './index.scss';

import Hello from '../../components/Hello'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tree: ''
		}
	}
	render() {
		return (
			<div>
				Home
        < Hello />
			</div>
		);
	}
}

export default Home;
