import AsyncStorage from "@react-native-async-storage/async-storage";
const SET_TASKS = "tasks/SET_TASKS";
const initialState = {
  tasks: [],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        tasks: action.tasks,
      };

    default:
      return state;
  }
};

export const setTask = (tasks) => ({ type: SET_TASKS, tasks });
export const getInfo = (type) => async (dispatch) => {
  const storageInfo = JSON.parse(await AsyncStorage.getItem(`@${type}`));
  if (storageInfo) {
    switch (type) {
      case "tasks":
        dispatch(setTask(storageInfo));
        break;

      default:
        break;
    }
  } else {
    dispatch(setTask([]));
  }
};
export const createTask = (payload) => async (dispatch) => {
  const task = {
    ...payload,
    id: `${+new Date()}`,
  };
  const storageTask = JSON.parse(await AsyncStorage.getItem(`@tasks`));

  if (!storageTask)
    await AsyncStorage.setItem(`@tasks`, JSON.stringify([task]));
  else {
    const jsonTask =
      storageTask && storageTask.length && storageTask.concat(task);
    await AsyncStorage.setItem(`@tasks`, JSON.stringify(jsonTask));
    dispatch(setTask(jsonTask));
  }
};
