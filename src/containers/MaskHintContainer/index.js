import React, { Component } from 'react';
// import { connect } from 'react-redux'

import PropTypes from 'prop-types';

import MaskHint from '../../components/MaskHint'

class MaskHintContainer extends Component {
  static propTypes = {
    keyWord: PropTypes.string.isRequired
  }
  static defaultProps = {
    keyWord: 'Eiiizong'
  }
  constructor(props) {
    super(props);
    this.state = {
      isShowMask: false
    }
  }
  handleShowMask = () => {
    const { isShowMask } = this.state
    if (isShowMask) {
      this.setState({
        isShowMask: !isShowMask
      })
      this._save()
    }
  }
  _get () {
    const { keyWord } = this.props
    return JSON.parse(localStorage.getItem(keyWord))
  }
  _save () {
    const { keyWord } = this.props
    localStorage.setItem(keyWord, JSON.stringify(false))
  }
  componentDidUpdate () {

  }
  componentWillMount () {
    const isShowMask = this._get()
    console.log('isShowMask', isShowMask)
    if (isShowMask === false) {
      this.setState({
        isShowMask
      })
    } else {
      this.setState({
        isShowMask: true
      })
    }
  }
  render () {
    const { isShowMask } = this.state
    return (
      <div>
        {
          isShowMask ? <MaskHint handleShowMask={this.handleShowMask}></MaskHint > : null
        }
      </div>
    );
  }
}


export default MaskHintContainer