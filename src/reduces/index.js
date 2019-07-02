import { HANDLE_AUDIO_PLAY, CITY_NAME } from '../constants'

const handleAudioIsPlay = (state, action) => {
  if (!state) {
    return {
      audioIsPlay: true,
      city_name: ''
    }
  }
  switch (action.type) {
    case HANDLE_AUDIO_PLAY:
      return {
        ...state,
        audioIsPlay: !state.audioIsPlay
      }
    case CITY_NAME:
      return {
        ...state,
        city_name: action.city_name
      }
    default: return state
  }
}

export default handleAudioIsPlay