import { StyleSheet } from "react-native";
import { theme } from "../../core/colors";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    height: "100%",
    padding: 10
  },
  inputContainer: {
    borderLeftWidth: 5,
    flex: 0.5,
    borderColor: theme.card,
    backgroundColor: theme.card,
    padding: 10,
    borderRadius: 10
  },
  textInput: {
    fontWeight: "bold",
    opacity: 0.7,
    fontSize: 16,
    color: theme.text
  },
  addButton: {
    position: "absolute",
    bottom: 10,
    backgroundColor: theme.secondText,
    width: "95%",
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 10
  },
  additionalBar: {
    position: "absolute",
    bottom: 0,
    paddingLeft: 10,
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
