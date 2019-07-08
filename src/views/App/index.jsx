import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './index.scss';
import './animation.scss';

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
    this.state = {
      animationClassName: 'forward'
    }
  }
  componentDidMount () {
    // console.log(this)
  }
  render () {
    let animationClassName;
    return (
      <Fragment>
        <AudioContainer></AudioContainer>
        <Router>
          <Route render={
            (props) => {
              const { location, history } = props
              // if (history.action === 'PUSH') {
              //   animationClassName = 'forward'
              // } else {
              //   animationClassName = 'back'
              // }
              console.log(animationClassName)
              console.log('location => ', location)
              return (
                <TransitionGroup component={null}>
                  <CSSTransition
                    key={'eiiizong' + Math.random()}
                    timeout={500}
                    classNames='forward'
                  >
                    <Switch>
                      <Route exact path='/' render={(props) => {
                        document.title = "首页"
                        return (
                          <Home {...props}></Home>
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
              )
            }
          }>
          </Route>
        </Router>
      </Fragment>
    );
  }
}

export default App;
