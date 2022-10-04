import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../core/colors";
const deviceWidth = Dimensions.get("window").height;
const deviceHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    alignSelf: "center",
    backgroundColor: theme.background,
    width: deviceWidth / 4,
    height: deviceHeight / 14,
    marginHorizontal: 10,
    borderRadius: 10,
    borderTopLeftRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoCard: {
    flex: 1,
    height: deviceHeight / 14,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
});
