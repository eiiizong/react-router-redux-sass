import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './index.scss';

import AudioContainer from '../../containers/AudioContainer'
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
    this.state = {}
  }
  componentDidMount () {
    console.log(this)
  }
  render () {
    return (
      <Router>
        <AudioContainer></AudioContainer>
        <TransitionGroup component={null}>
          <CSSTransition timeout={500} classNames="change-route">
            <Switch>
              <Route exact path='/' component={null} render={(match, ...rest) => {
                console.log('match, rest', match, rest)
                document.title = "首页"
                return (
                  <Home></Home>
                )
              }}></Route>
              <Route path='/citylist' component={CityList}></Route>
              <Route path='/choice' component={ChoiceBG}></Route>
              <Route path='/detail/:id' component={DemandDetail}></Route>
              <Route path='/list' component={DemandsList}></Route>
              <Route path='/typelist' component={DemandTypeList}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Router>
    );
  }
}

export default App;
