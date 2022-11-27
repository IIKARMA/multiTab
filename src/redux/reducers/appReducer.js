import AsyncStorage from '@react-native-async-storage/async-storage'
import { uk } from '../../translations/uk'
const SET_IS_LAUNCH = 'app/SET_IS_LAUNCH'
const SET_LANGUAGES = 'app/SET_LANGUAGES'

export const initialState = {
  isLaunched: false,
  languages: uk
}
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LAUNCH:
      return {
        ...state,
        isLaunched: action.isLaunched
      }
    case SET_LANGUAGES:
      return {
        ...state,
        languages: action.languages
      }
    default:
      return state
  }
}

export const setIsLaunched = (isLaunched) => ({
  type: SET_IS_LAUNCH,
  isLaunched
})
export const setLanguages = (languages) => ({
  type: SET_LANGUAGES,
  languages
})
export const setIsLauchedTC = () => async (dispatch) => {
  const appLaunched = await AsyncStorage.getItem('@appLaunched_key')

  if (!appLaunched) {
    await AsyncStorage.setItem('@appLaunched_key', 'true')
    dispatch(setIsLaunched(true))
  }
  dispatch(setIsLaunched(!!appLaunched))
}
