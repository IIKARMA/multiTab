import AsyncStorage from "@react-native-async-storage/async-storage";
const SET_DISABLE_COMPLETED = "directory/SET_DISABLE_COMPLETED";
const initialState = {
  completed: false,
};
export const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DISABLE_COMPLETED:
      {
        return {
          ...state,
          completed: action.isEnable,
        };
      }
      break;

    default:
      return state;
  }
};
export const setDisableCompleted = (isEnable) => ({
  type: SET_DISABLE_COMPLETED,
  isEnable,
});
