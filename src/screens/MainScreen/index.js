import React from "react";
import { View } from "react-native";
import MenuNavigator from "../../navigator/menuNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { ItemList } from "../";
import { styles } from "./styles";
const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <ItemList navigation={navigation} />
      </View>
      <View style={styles.actionMenu}>
        <MenuNavigator />
      </View>
    </SafeAreaView>
  );
};
export default MainScreen;
