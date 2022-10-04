import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { tasksReducer } from "../reducers/tasksReducer";
import { directoryReducer } from "../reducers/directoryReducer";
const reducers = combineReducers({
  task: tasksReducer,
  directory: directoryReducer,
});
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
