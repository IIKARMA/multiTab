import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../core/colors";
const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  searchBox: {
    marginVertical: 10,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.navigator,
    width: "95%",
    alignSelf: "center"
  },
  searchInput: { width: "90%", color: theme.text },
  searchIcon: {
    width: 16,
    height: 16,
    tintColor: theme.text,
    marginHorizontal: 5
  }
});
