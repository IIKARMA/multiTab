"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.completedNotes = exports.createNotes = exports.setNotes = exports.notesReducer = exports.getNotes = void 0;

var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_NOTES = "tasks/SET_NOTES";
var initialState = {
  notes: []
};

var getNotes = function getNotes() {
  return function _callee(dispatch) {
    var storageInfo;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = JSON;
            _context.next = 3;
            return regeneratorRuntime.awrap(_asyncStorage["default"].getItem("@notes"));

          case 3:
            _context.t1 = _context.sent;
            storageInfo = _context.t0.parse.call(_context.t0, _context.t1);
            storageInfo ? dispatch(setNotes(storageInfo)) : dispatch(setNotes([]));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.getNotes = getNotes;

var notesReducer = function notesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_NOTES:
      return _objectSpread({}, state, {
        notes: action.notes
      });

    default:
      return state;
  }
};

exports.notesReducer = notesReducer;

var setNotes = function setNotes(notes) {
  return {
    type: SET_NOTES,
    notes: notes
  };
};

exports.setNotes = setNotes;

var createNotes = function createNotes(payload) {
  return function _callee2(dispatch) {
    var notes, storageTask, jsonTask;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            notes = _objectSpread({}, payload, {
              id: "".concat(+new Date())
            });
            _context2.t0 = JSON;
            _context2.next = 4;
            return regeneratorRuntime.awrap(_asyncStorage["default"].getItem("@notes"));

          case 4:
            _context2.t1 = _context2.sent;
            storageTask = _context2.t0.parse.call(_context2.t0, _context2.t1);

            if (storageTask) {
              _context2.next = 11;
              break;
            }

            _context2.next = 9;
            return regeneratorRuntime.awrap(_asyncStorage["default"].setItem("@notes", JSON.stringify([notes])));

          case 9:
            _context2.next = 14;
            break;

          case 11:
            jsonTask = storageTask.concat(notes);
            _context2.next = 14;
            return regeneratorRuntime.awrap(_asyncStorage["default"].setItem("@notes", JSON.stringify(jsonTask)));

          case 14:
            dispatch(getNotes());

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

exports.createNotes = createNotes;

var completedNotes = function completedNotes(id) {
  return function _callee3(dispatch) {
    var storageTask, newArr;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.t0 = JSON;
            _context3.next = 3;
            return regeneratorRuntime.awrap(_asyncStorage["default"].getItem("@notes"));

          case 3:
            _context3.t1 = _context3.sent;
            storageTask = _context3.t0.parse.call(_context3.t0, _context3.t1);
            console.log(id);
            newArr = storageTask.map(function (obj) {
              obj.id === id ? _objectSpread({}, obj, {
                completed: true
              }) : obj;
            });
            _context3.next = 9;
            return regeneratorRuntime.awrap(_asyncStorage["default"].setItem("@notes", JSON.stringify(newArr)));

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};

exports.completedNotes = completedNotes;