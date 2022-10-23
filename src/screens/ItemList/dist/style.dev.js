"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _reactNative = require("react-native");

var _colors = require("../../core/colors");

var styles = _reactNative.StyleSheet.create({
  container: {
    marginBottom: 20,
    backfaceVisibility: "visible",
    alignSelf: "center",
    backgroundColor: _colors.theme.card,
    borderRadius: 20,
    padding: 10,
    overflow: "hidden",
    width: "90%"
  },
  headerContainer: {
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  headerText: {
    marginLeft: 4,
    fontWeight: "bold",
    padding: 5,
    fontSize: 18,
    borderBottomColor: _colors.theme.secondText,
    color: _colors.theme.text
  },
  addButton: {
    backgroundColor: _colors.theme.item,
    borderRadius: 10
  },
  addText: {
    padding: 8,
    fontSize: 12,
    borderBottomColor: _colors.theme.secondText,
    color: _colors.theme.text
  },
  cardItem: {
    backgroundColor: _colors.theme.item,
    marginTop: 10,
    borderColor: _colors.theme.item,
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 5,
    height: 140,
    width: 160
  },
  check: {
    marginVertical: 4,
    backgroundColor: _colors.theme.card
  },
  nameItem: {
    color: _colors.theme.text,
    fontSize: 18,
    paddingBottom: 20,
    fontWeight: "600"
  },
  textItem: {
    color: _colors.theme.text,
    fontSize: 16,
    fontWeight: "500"
  }
});

exports.styles = styles;