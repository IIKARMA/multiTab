import AsyncStorage from "@react-native-async-storage/async-storage";
const SET_TASKS = "tasks/SET_TASKS";
const SET_NOTES = "tasks/SET_NOTES";
const initialState = {
  tasks: [],
  notes: []
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        tasks: action.tasks
      };
    case SET_NOTES:
      return {
        ...state,
        notes: action.notes
      };

    default:
      return state;
  }
};

export const setTask = (tasks) => ({ type: SET_TASKS, tasks });
export const setNotes = (notes) => ({ type: SET_NOTES, notes });
export const getInfo = (type) => async (dispatch) => {
  const storageInfo = JSON.parse(await AsyncStorage.getItem(`@${type}`));
  if (storageInfo) {
    switch (type) {
      case "tasks": {
        dispatch(setTask(storageInfo));
      }

      case "notes": {
        dispatch(setNotes(storageInfo));
      }

      default:
    }
  } else {
    dispatch(setTask([]));
    dispatch(setNotes([]));
  }
};
export const createNotes = (payload) => async (dispatch) => {
  const notes = {
    ...payload,
    id: `${+new Date()}`
  };
  const storageTask = JSON.parse(await AsyncStorage.getItem(`@notes`));

  if (!storageTask)
    await AsyncStorage.setItem(`@notes`, JSON.stringify([notes]));
  else {
    const jsonTask = storageTask.concat(notes);
    await AsyncStorage.setItem(`@notes`, JSON.stringify(jsonTask));
  }
  dispatch(getInfo("notes"));
};
export const createTask = (payload) => async (dispatch) => {
  const task = {
    ...payload,
    id: `${+new Date()}`
  };
  const storageTask = JSON.parse(await AsyncStorage.getItem(`@tasks`));

  if (!storageTask)
    await AsyncStorage.setItem(`@tasks`, JSON.stringify([task]));
  else {
    const jsonTask = storageTask.concat(task);
    await AsyncStorage.setItem(`@tasks`, JSON.stringify(jsonTask));
  }
  dispatch(getInfo("tasks"));
};
export const editingTaskTC = (task, id) => async (dispatch) => {
  const storageTask = JSON.parse(await AsyncStorage.getItem(`@tasks`));
  const editingTask = storageTask.map((oldTask) => {
    if (oldTask.id === id) {
      oldTask.heading = task?.heading;
      oldTask.task = task?.task;
      oldTask.background = task?.background;
      oldTask.activeTags = task?.activeTags;
      oldTask.selectDate = task?.selectDate;
      oldTask.selectTime = task?.selectTime;
    }
    return oldTask;
  });
  await AsyncStorage.setItem("@tasks", JSON.stringify(editingTask));
  dispatch(setTask(editingTask));
};
export const removeTaskTC = (id) => async (dispatch) => {
  const storageTask = JSON.parse(await AsyncStorage.getItem("@tasks"));
  const updatedTask = storageTask.filter(
    (tasks) => tasks.id.toString() !== id.toString()
  );
  await AsyncStorage.setItem("@tasks", JSON.stringify(updatedTask));
  dispatch(setTask(updatedTask));
};
