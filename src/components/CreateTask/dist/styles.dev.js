"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _reactNative = require("react-native");

var _colors = require("../../core/colors");

var styles = _reactNative.StyleSheet.create({
  container: {
    paddingTop: 80,
    height: "100%",
    padding: 10
  },
  inputContainer: {
    borderLeftWidth: 5,
    flex: 0.5,
    borderColor: _colors.theme.card,
    backgroundColor: _colors.theme.card,
    padding: 10,
    borderRadius: 10
  },
  textInput: {
    fontWeight: "bold",
    opacity: 0.7,
    fontSize: 16,
    color: _colors.theme.text
  },
  addButton: {
    position: "absolute",
    bottom: 10,
    backgroundColor: _colors.theme.secondText,
    width: "95%",
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 10
  },
  text: {
    color: _colors.theme.text,
    fontSize: 12
  },
  additionalBar: {
    position: "absolute",
    bottom: 0,
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
    width: "100%"
  },
  box: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  swatchStyle: {
    borderRadius: 25,
    height: 45,
    width: 45,
    marginHorizontal: 5,
    marginBottom: 15,
    shadowColor: "#fff"
  },
  shadow: {
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2
    }
  }
});

exports.styles = styles;