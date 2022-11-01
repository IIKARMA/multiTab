"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTags = exports.getInfo = exports.createDefaultTags = exports.setTags = exports.setVisibleModalTC = exports.setIsDone = exports.setDisableCompleted = exports.directoryReducer = exports.initialState = void 0;

var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_DISABLE_COMPLETED = "directory/SET_DISABLE_COMPLETED";
var SET_IS_DONE = "directory/SET_IS_DONE";
var SET_VISIBLE_MODAL = "directory/SET_VISIBLE_MODAL";
var SET_TAGS = "directory/SET_TAGS";
var initialState = {
  isDone: "false",
  completed: false,
  visibleModal: false,
  tags: [{
    id: 1,
    value: "#Робота",
    color: "#AC8AEF"
  }, {
    id: 2,
    value: "#Дом",
    color: "#FF8E86"
  }, {
    id: 3,
    value: "#Інше",
    color: "#167D7F"
  }]
};
exports.initialState = initialState;

var directoryReducer = function directoryReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_DISABLE_COMPLETED:
      return _objectSpread({}, state, {
        completed: action.isEnable
      });

    case SET_VISIBLE_MODAL:
      return _objectSpread({}, state, {
        visibleModal: action.isEnable
      });

    case SET_IS_DONE:
      return _objectSpread({}, state, {
        isDone: action.isEnable
      });

    case SET_TAGS:
      return _objectSpread({}, state, {
        tags: action.tags
      });

    default:
      return state;
  }
};

exports.directoryReducer = directoryReducer;

var setDisableCompleted = function setDisableCompleted(isEnable) {
  return {
    type: SET_DISABLE_COMPLETED,
    isEnable: isEnable
  };
};

exports.setDisableCompleted = setDisableCompleted;

var setIsDone = function setIsDone(isEnable) {
  return {
    type: SET_IS_DONE,
    isEnable: isEnable
  };
};

exports.setIsDone = setIsDone;

var setVisibleModalTC = function setVisibleModalTC(isEnable) {
  return {
    type: SET_VISIBLE_MODAL,
    isEnable: isEnable
  };
};

exports.setVisibleModalTC = setVisibleModalTC;

var setTags = function setTags(tags) {
  return {
    type: SET_TAGS,
    tags: tags
  };
};

exports.setTags = setTags;

var createDefaultTags = function createDefaultTags(type) {
  return function _callee(dispatch) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_asyncStorage["default"].setItem("@".concat(type), JSON.stringify(initialState[type])));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.createDefaultTags = createDefaultTags;

var getInfo = function getInfo(type) {
  return function _callee2(dispatch) {
    var storageInfo;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = JSON;
            _context2.next = 3;
            return regeneratorRuntime.awrap(_asyncStorage["default"].getItem("@".concat(type)));

          case 3:
            _context2.t1 = _context2.sent;
            storageInfo = _context2.t0.parse.call(_context2.t0, _context2.t1);

            if (!storageInfo) {
              _context2.next = 13;
              break;
            }

            _context2.t2 = type;
            _context2.next = _context2.t2 === "tags" ? 9 : 10;
            break;

          case 9:
            dispatch(setTags(storageInfo));

          case 10:
            return _context2.abrupt("break", 11);

          case 11:
            _context2.next = 14;
            break;

          case 13:
            dispatch(setTags([]));

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

exports.getInfo = getInfo;

var createTags = function createTags(payload) {
  return function _callee3(dispatch) {
    var tag, storageTag, jsonTag;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            tag = _objectSpread({}, payload, {
              id: "".concat(+new Date())
            });
            _context3.t0 = JSON;
            _context3.next = 4;
            return regeneratorRuntime.awrap(_asyncStorage["default"].getItem("@tags"));

          case 4:
            _context3.t1 = _context3.sent;
            storageTag = _context3.t0.parse.call(_context3.t0, _context3.t1);

            if (storageTag) {
              _context3.next = 11;
              break;
            }

            _context3.next = 9;
            return regeneratorRuntime.awrap(_asyncStorage["default"].setItem("@tags", JSON.stringify([tag])));

          case 9:
            _context3.next = 14;
            break;

          case 11:
            jsonTag = storageTag && storageTag.length && storageTag.concat(tag);
            _context3.next = 14;
            return regeneratorRuntime.awrap(_asyncStorage["default"].setItem("@tags", JSON.stringify(jsonTag)));

          case 14:
            dispatch(getInfo("tags"));

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};

exports.createTags = createTags;