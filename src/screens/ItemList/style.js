import { StyleSheet } from "react-native";
import { theme } from "../../core/colors";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backfaceVisibility: "visible",
    alignSelf: "center",
    backgroundColor: theme.card,
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
    borderBottomColor: theme.secondText,
    color: theme.text
  },
  addButton: { backgroundColor: theme.item, borderRadius: 10 },
  addText: {
    padding: 8,
    fontSize: 12,
    borderBottomColor: theme.secondText,
    color: theme.text
  },
  cardItem: {
    backgroundColor: theme.item,
    marginTop: 10,
    borderColor: theme.item,
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 5,
    height: 140,
    width: 160
  },
  completedCount: {
    paddingHorizontal: 5,
    borderRadius: 8,
    borderWidth: 1.2,
    borderColor: theme.secondNavigator
  },
  check: {
    marginLeft: 10,
    marginVertical: 4,
    backgroundColor: theme.card
  },
  nameItem: {
    color: theme.text,
    fontSize: 18,
    paddingBottom: 20,
    fontWeight: "600"
  },
  textItem: { color: theme.text, fontSize: 16, fontWeight: "500" }
});
