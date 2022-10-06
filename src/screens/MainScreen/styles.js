import { StyleSheet } from "react-native";
import { theme } from "../../core/colors";

export const styles = StyleSheet.create({
  actionMenu: {
    position: "absolute",
    right: 16,
    bottom: 26,
  },
  container: { flex: 1, backgroundColor: theme.background },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
});
