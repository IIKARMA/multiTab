import AsyncStorage from "@react-native-async-storage/async-storage";
const SET_DISABLE_COMPLETED = "directory/SET_DISABLE_COMPLETED";
const SET_IS_DONE = "directory/SET_IS_DONE";
const SET_VISIBLE_MODAL = "directory/SET_VISIBLE_MODAL";
const SET_TAGS = "directory/SET_TAGS";

export const initialState = {
  isDone: "false",
  completed: false,
  visibleModal: false,
  tags: []
};
export const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DISABLE_COMPLETED:
      return {
        ...state,
        completed: action.isEnable
      };

    case SET_VISIBLE_MODAL:
      return {
        ...state,
        visibleModal: action.isEnable
      };
    case SET_IS_DONE:
      return {
        ...state,
        isDone: action.isEnable
      };

    case SET_TAGS:
      return {
        ...state,
        tags: action.tags
      };

    default:
      return state;
  }
};
export const setDisableCompleted = (isEnable) => ({
  type: SET_DISABLE_COMPLETED,
  isEnable
});
export const setIsDone = (isEnable) => ({ type: SET_IS_DONE, isEnable });
export const setVisibleModalTC = (isEnable) => ({
  type: SET_VISIBLE_MODAL,
  isEnable
});
export const setTags = (tags) => ({ type: SET_TAGS, tags });
export const createDefaultTags = (type) => async (dispatch) => {
  await AsyncStorage.setItem(`@${type}`, JSON.stringify(initialState[type]));
};
export const getInfo = (type) => async (dispatch) => {
  const storageInfo = JSON.parse(await AsyncStorage.getItem(`@${type}`));
  if (storageInfo) {
    switch (type) {
      case "tags":
        dispatch(setTags(storageInfo));
      default:
        break;
    }
  } else dispatch(setTags([]));
};

export const createTags = (payload) => async (dispatch) => {
  const tag = {
    ...payload,
    id: `${+new Date()}`
  };
  const storageTag = JSON.parse(await AsyncStorage.getItem(`@tags`));

  if (!storageTag) await AsyncStorage.setItem(`@tags`, JSON.stringify([tag]));
  else {
    const jsonTag = storageTag && storageTag.length && storageTag.concat(tag);
    await AsyncStorage.setItem(`@tags`, JSON.stringify(jsonTag));
  }
  dispatch(getInfo("tags"));
};
