import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom"

const AuthExample = () => {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <hr />
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </Router>
  )
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate (cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout (cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(({ history }) =>
  fakeAuth.isAuthenticated ?
    (
      <p>
        Welcome!(' ')
      <button onClick={() => {
          fakeAuth.signout(() => {
            history.push('/')
          })
        }}>sign out</button>
      </p>
    )
    : (
      <p>You are not logged in.</p>
    )
)

const Public = () => {
  return (
    <div>
      <h3>Public</h3>
    </div>
  );
}
class Login extends Component {
  state = { redirectToReferrer: false }
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      })
    })
  }
  render () {
    console.log(this.props)
    let { from } = this.props.location.state || { from: { pathname: '/' } }
    let { redirectToReferrer } = this.state
    if (redirectToReferrer) return <Redirect to={from} />
    return (
      <div>
        <p>You mast log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>login in</button>
      </div>
    );
  }
}

const Protected = () => {
  return (
    <div>
      <h3>Protected</h3>
    </div>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(rest)
  return (
    <Route
      {...rest}
      render={props => fakeAuth.isAuthenticated ?
        (<Component {...props} />)
        : (<Redirect to={
          {
            pathname: '/login',
            state: {
              from: props.location
            }
          }
        } />)
      }
    />
  );
}
export default AuthExample;