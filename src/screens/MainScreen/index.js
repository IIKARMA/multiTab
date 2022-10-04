import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import MenuNavigator from "../../navigator/menuNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { ItemList } from "../";
import { useDispatch, useSelector } from "react-redux";
const MainScreen = ({ navigation, tasks }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        {/* <Image
          style={[StyleSheet.absoluteFill, styles.image]}
          source={require("../../icons/vector.png")}
        /> */}
        <ItemList navigation={navigation} />
      </View>
      <View style={styles.actionMenu}>
        <MenuNavigator />
      </View>
    </SafeAreaView>
  );
};
export default MainScreen;
