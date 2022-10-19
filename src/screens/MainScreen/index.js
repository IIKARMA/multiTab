import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import MenuNavigator from "../../navigator/menuNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { ItemList } from "../";
import { styles } from "./styles";
import { Header } from "../../components";
const MainScreen = ({ navigation, tasks, languages }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={StyleSheet.absoluteFill}
        source={require("../../icons/back.png")}
        resizeMode='cover'
      />
      <View style={{ flex: 1 }}>
        <Header navigation={navigation} />
        <ItemList navigation={navigation} tasks={tasks} languages={languages} />
        <View style={styles.actionMenu}>
          <MenuNavigator />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default MainScreen;
