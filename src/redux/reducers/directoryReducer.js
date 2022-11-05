import AsyncStorage from "@react-native-async-storage/async-storage";
import { uk } from "../../translations/uk";
const SET_DISABLE_COMPLETED = "directory/SET_DISABLE_COMPLETED";
const SET_IS_DONE = "directory/SET_IS_DONE";
const SET_VISIBLE_MODAL = "directory/SET_VISIBLE_MODAL";
const SET_TAGS = "directory/SET_TAGS";

export const initialState = {
  isDone: "false",
  completed: false,
  visibleModal: false,
  tags: [
    {
      id: 1,
      value: uk.tagsValue[0],
      color: "#AC8AEF"
    },
    { id: 2, value: uk.tagsValue[1], color: "#FF8E86" },
    { id: 3, value: uk.tagsValue[2], color: "#167D7F" }
  ],
  priority: [
    {
      id: 0,
      value: uk.prorityValue[0],
      color: "#1CFEBA",
      selectColor: "#1CFEB04A"
    },
    {
      id: 1,
      value: uk.prorityValue[1],
      color: "#6CCFF6",
      selectColor: "#6CCFF046"
    },
    {
      id: 2,
      value: uk.prorityValue[2],
      color: "#FFA62B",
      selectColor: "#FFA6204B"
    },
    {
      id: 3,
      value: uk.prorityValue[3],
      color: "#D62839",
      selectColor: "#D6283049"
    }
  ],
  difficulty: [
    {
      id: 0,
      value: uk.difficultyValue[0],
      color: "#1CFEBA",
      selectColor: "#1CFEB04A"
    },
    {
      id: 1,
      value: uk.difficultyValue[1],
      color: "#6CCFF6",
      selectColor: "#6CCFF046"
    },
    {
      id: 2,
      value: uk.difficultyValue[2],
      color: "#FFA62B",
      selectColor: "#FFA6204B"
    }
  ]
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
export const createDefaultTags = () => async (dispatch) => {
  await AsyncStorage.setItem(`@tags`, JSON.stringify(initialState["tags"]));
  // dispatch(setTags([initialState["tags"]]));
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
