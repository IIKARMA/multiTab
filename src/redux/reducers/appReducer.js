import AsyncStorage from "@react-native-async-storage/async-storage";
import { uk } from "../../translations/uk";
const SET_IS_LAUNCH = "app/SET_IS_LAUNCH";
const SET_LANGUAGES = "app/SET_LANGUAGES";

export const initialState = {
  isLaunched: false,
  languages: uk
};
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LAUNCH:
      return {
        ...state,
        isLaunched: action.isEnable
      };
    case SET_LANGUAGES:
      return {
        ...state,
        languages: action.languages
      };
    default:
      return state;
  }
};

export const setIsLauched = (isEnable) => ({
  type: SET_IS_LAUNCH,
  isEnable
});
export const setLanguages = (languages) => ({
  type: SET_LANGUAGES,
  languages
});
