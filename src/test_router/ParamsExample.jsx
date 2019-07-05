import React, { /*Component*/ } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const ParamsExample = () => {
	return (
		<Router>
			<h2>Accounts</h2>
			<ul>
				<li>
					<Link to="/netflix">Netflix</Link>
				</li>
				<li>
					<Link to="/zillow-group">Zillow Group</Link>
				</li>
				<li>
					<Link to="/yahoo">Yahoo</Link>
				</li>
				<li>
					<Link to="/modus-create">Modus Create</Link>
				</li>
				<li>
					<Link to="/order">Order</Link>
				</li>
			</ul>
		  <Route path="/:id" component={Child} />
	    {/* 
        只有路由路径为 /order/asc 或者 /order/desc 该组件才会渲染
      */}
      <Route
          path="/order/:direction(asc|desc)"
          component ={ComponentWithRegex}
	  	/>                                                            
    </Router>
 	)
}

const Child = (props) => {
	console.log('Child props', props)
  return (
    <div>
      <h3>ID: {props.match.params.id}</h3>
    </div>
  )
}

const ComponentWithRegex = (props) => {
	console.log('ComponentWithRegex props', props)
  return (
    <div>
      <h3>Only asc/desc are allowed: {props.match.params.direction}</h3>
    </div>
  )
}

export default ParamsExample;