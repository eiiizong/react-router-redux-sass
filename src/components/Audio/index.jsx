import React, { Component } from 'react';

import './index.scss'

import musicIcon from './music.png'

class Audio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioUrl: 'http://125.74.6.16/amobile.music.tc.qq.com/C400001tocuz07PLX4.m4a?guid=1261617422&vkey=48458F3C5CBC2B11A012CE0EF362502F3B796011865724B1103FA703D7D38D42842902CA16C25FD7F8E48DE00119BA5A0EC036E0CD6706FB&uin=1810&fromtag=66',
      audioIsPlay: true
    }
  }
  componentDidMount () { }
  handleAudioPlay = () => {
    if (!this.state.audioIsPlay) {
      this.audio.play()
    } else {
      this.audio.pause()
    }
    this.setState({
      audioIsPlay: !this.state.audioIsPlay
    })
  }
  render () {
    const audioUrl = this.state.audioUrl
    const audioIsPlay = this.state.audioIsPlay
    return (
      <div className="audio">
        <img className={audioIsPlay ? '' : 'paused'} src={musicIcon} alt="audio icon" onClick={this.handleAudioPlay} />
        <audio src={audioUrl} controls loop ref={audio => this.audio = audio}>
          您的浏览器不支持 audio 标签。
        </audio>
      </div>
    );
  }
}

export default Audio;