import { StyleSheet } from "react-native";
import { theme } from "../../core/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#A54657",
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    padding: 10,
    overflow: "hidden",
    width: "90%"
  },
  text: {
    marginLeft: 4,
    fontWeight: "bold",
    padding: 5,
    fontSize: 18,
    borderBottomColor: theme.secondText,
    color: theme.text
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  header: {
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  body: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonPlay: {
    marginRight: 10,
    borderRadius: 50,
    padding: 5,
    backgroundColor: "#582630"
  }
});
