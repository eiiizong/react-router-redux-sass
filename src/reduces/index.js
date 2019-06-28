const types = {
  CITY_NAME: 'CITY_NAME'
}

const chnageCityName = (state, action) => {
  if (!state) {
    return {
      cityName: '成都市'
    }
  }

  switch (action.type) {
    case types.CITY_NAME: return {
      ...state,
      cityName: action.cityName
    }

    default: return state
  }
}

export default chnageCityName