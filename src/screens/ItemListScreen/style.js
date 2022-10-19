import { StyleSheet } from "react-native";
import { theme } from "../../core/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    paddingVertical: 10
  },
  textItem: {},
  tag: {
    overflow: "hidden",
    opacity: 0.7,
    alignSelf: "flex-end",
    textAlign: "center",
    borderRadius: 10,
    padding: 5
  },
  item: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: theme.navigator
  },
  text: {
    color: theme.text,
    fontSize: 16,
    padding: 7
  },
  date: {
    marginVertical: 2,
    alignSelf: "center",
    width: "98%",
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomColor: theme.completed,
    fontWeight: "bold",
    opacity: 0.9
  },
  tile: {
    width: "45%",
    height: 240
  },
  card: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    alignSelf: "center",
    width: "95%",
    height: 120
  }
});
