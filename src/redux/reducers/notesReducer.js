import AsyncStorage from "@react-native-async-storage/async-storage";
const SET_NOTES = "tasks/SET_NOTES";

const initialState = {
  notes: []
};
export const getNotes = () => async (dispatch) => {
  const storageInfo = JSON.parse(await AsyncStorage.getItem(`@notes`));
  storageInfo ? dispatch(setNotes(storageInfo)) : dispatch(setNotes([]));
};
export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTES:
      return {
        ...state,
        notes: action.notes
      };

    default:
      return state;
  }
};
export const setNotes = (notes) => ({ type: SET_NOTES, notes });

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
  dispatch(getNotes());
};
export const completedNotes = (id) => async (dispatch) => {
  const storageTask = JSON.parse(await AsyncStorage.getItem(`@notes`));
  console.log(id);

  const newArr = storageTask?.map((obj) => {
    return obj.id === id ? { ...obj, completed: !obj.completed } : obj;
  });

  await AsyncStorage.setItem(`@notes`, JSON.stringify(newArr));
  dispatch(setNotes(newArr));
};
export const editingNoteTC = (note, id) => async (dispatch) => {
  const storageNotes = JSON.parse(await AsyncStorage.getItem(`@notes`));
  const editingNotes = storageNotes.map((oldNotes) => {
    if (oldNotes.id === id) {
      oldNotes.heading = note?.heading;
      oldNotes.note = note?.note;
      oldNotes.background = note?.background;
      oldNotes.activeTags = note?.activeTags;
      oldNotes.selectDate = note?.selectDate;
      oldNotes.selectTime = note?.selectTime;
      oldNotes.priority = note?.priority;
      oldNotes.difficulty = note?.difficulty;
    }
    return oldNotes;
  });
  await AsyncStorage.setItem("@notes", JSON.stringify(editingNotes));
  dispatch(setNotes(editingNotes));
};
export const removeNotesTC = (id) => async (dispatch) => {
  const storageNotes = JSON.parse(await AsyncStorage.getItem("@notes"));
  const updatedNotes = storageNotes.filter(
    (note) => note.id.toString() !== id.toString()
  );
  await AsyncStorage.setItem("@notes", JSON.stringify(updatedNotes));
  dispatch(setNotes(updatedNotes));
};
