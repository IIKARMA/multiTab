import { StyleSheet } from "react-native";
import { theme } from "../../core/colors";

export const styles = StyleSheet.create({
  container: { height: "100%", padding: 10 },
  inputContainer: {
    flex: 0.5,
    backgroundColor: theme.card,
    padding: 10,
    borderRadius: 10,
  },
  textInput: {
    fontWeight: "bold",
    opacity: 0.7,
    paddingBottom: 15,
    fontSize: 16,
    color: theme.text,
  },
  addButton: {
    position: "absolute",
    bottom: 10,
    backgroundColor: theme.secondText,
    width: "95%",
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 10,
  },
  additionalBar: {
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
    width: "50%",
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
