import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { tasksReducer } from "../reducers/tasksReducer";
import { directoryReducer } from "../reducers/directoryReducer";
import { appReducer } from "../reducers/appReducer";
import { notesReducer } from "../reducers/notesReducer";
const reducers = combineReducers({
	notes: notesReducer,
	app: appReducer,
	tasks: tasksReducer,
	directory: directoryReducer,
});
const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(thunk))
);
export default store;
