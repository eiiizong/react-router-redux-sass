import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './index.module.scss'
import musicIcon from './music.png'
import music from '../../assets/media/C400003QDxkV0TslrO.m4a'

class Audio extends Component {
  static propTypes = {
    audioIsPlay: PropTypes.bool.isRequired,
    handleAudioPlay: PropTypes.func.isRequired,
    audioUrl: PropTypes.string.isRequired
  }
  static defaultProps = {
    audioIsPlay: true,
    audioUrl: music,
    handleAudioPlay: () => { }
  }
  constructor(props) {
    super(props);
    this.audioRef = React.createRef()
  }
  componentDidMount () {
    console.log('Audio => ', this)
  }
  handleAudioPlay = () => {
    const { handleAudioPlay, audioIsPlay } = this.props
    if (handleAudioPlay) {
      if (audioIsPlay) {
        this.audioRef.current.pause()
      } else {
        this.audioRef.current.play()
      }
      handleAudioPlay()
    }
  }
  render () {
    const { audioUrl, audioIsPlay } = this.props
    return (
      <div className={style.audio}>
        <img className={audioIsPlay ? '' : style.paused} src={musicIcon} alt="audio icon" onClick={this.handleAudioPlay} />
        <audio src={audioUrl} controls autoPlay loop ref={this.audioRef}>
          您的浏览器不支持 audio 标签。
        </audio>
      </div>
    );
  }
}

export default Audio;