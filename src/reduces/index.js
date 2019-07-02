import { HANDLE_AUDIO_PLAY } from '../constants'

const handleAudioIsPlay = (state, action) => {
  if (!state) {
    return {
      audioIsPlay: true
    }
  }
  switch (action.type) {
    case HANDLE_AUDIO_PLAY:
      return {
        ...state,
        audioIsPlay: !state.audioIsPlay
      }

    default: return state
  }
}

export default handleAudioIsPlay