import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { HANDLE_AUDIO_PLAY } from '../../constants'
import Audio from '../../components/Audio'

import music from '../../assets/media/C400003QDxkV0TslrO.m4a'

class AudioContainer extends Component {
  static propTypes = {
    audioIsPlay: PropTypes.bool.isRequired,
    handleAudioPlay: PropTypes.func.isRequired
  }
  static defaultProps = {
    // audioIsPlay: true
  }
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidUpdate () {

  }
  componentDidMount () {
  }
  render () {
    const { audioIsPlay, handleAudioPlay } = this.props
    return (
      <Audio audioUrl={music} handleAudioPlay={handleAudioPlay} audioIsPlay={audioIsPlay}></Audio>
    );
  }
}

const audioAction = {
  type: HANDLE_AUDIO_PLAY
}

const mapStateToProps = (state) => {
  return {
    audioIsPlay: state.audioIsPlay
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleAudioPlay: () => dispatch(audioAction)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioContainer);