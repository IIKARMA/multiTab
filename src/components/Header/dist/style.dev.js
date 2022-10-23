"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _reactNative = require("react-native");

var _colors = require("../../core/colors");

var styles = _reactNative.StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 30
  },
  borderLeft: {
    borderLeftWidth: 0,
    borderLeftColor: _colors.theme.card
  },
  dateContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: _colors.theme.card,
    padding: 8,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  text: {
    fontWeight: "normal",
    color: _colors.theme.text,
    fontSize: 18
  }
});

exports.styles = styles;