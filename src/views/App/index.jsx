import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './index.scss';

import Home from '../../views/Home'
import CityList from '../../views/CityList'
import DemandDetail from '../../views/DemandDetail'
import DemandTypeList from '../../views/DemandTypeList'
import DemandsList from '../../views/DemandsList'
import ChoiceBG from '../../views/ChoiceBG'
import NotFound from '../../views/NotFound'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tree: ''
    }
  }
  componentDidMount () {
  }
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/citylist' component={CityList}></Route>
          <Route path='/choice' component={ChoiceBG}></Route>
          <Route path='/detail' component={DemandDetail}></Route>
          <Route path='/list' component={DemandsList}></Route>
          <Route path='/typelist' component={DemandTypeList}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
