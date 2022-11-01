"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _tasksReducer = require("../reducers/tasksReducer");

var _directoryReducer = require("../reducers/directoryReducer");

var _appReducer = require("../reducers/appReducer");

var _notesReducer = require("../reducers/notesReducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducers = (0, _redux.combineReducers)({
  notes: _notesReducer.notesReducer,
  app: _appReducer.appReducer,
  tasks: _tasksReducer.tasksReducer,
  directory: _directoryReducer.directoryReducer
});
var store = (0, _redux.createStore)(reducers, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk["default"])));
var _default = store;
exports["default"] = _default;