import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import MenuNavigator from "../../navigator/menuNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { ItemList } from "../";
import { styles } from "./styles";
import { Header, PomodoroBlock } from "../../components";
const MainScreen = ({ navigation, tasks, notes, languages }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={StyleSheet.absoluteFill}
        source={require("../../icons/back.png")}
        resizeMode='cover'
      />
      <Header navigation={navigation} />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start"
        }}>
        <ItemList
          navigation={navigation}
          items={tasks.tasks}
          languages={languages}
          type={"tasks"}
        />
        <ItemList
          navigation={navigation}
          items={notes.notes}
          languages={languages}
          type={"notes"}
        />
        <PomodoroBlock languages={languages} />
        <View style={styles.actionMenu}>
          <MenuNavigator />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default MainScreen;
