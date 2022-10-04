import React from "react";
import { View, Text, Image } from "react-native";
import { MyTextInput } from "../../components";
import { theme } from "../../core/colors";

const NewTask = ({ createTask, navigation }) => {
  return (
    <View style={{ backgroundColor: theme.background }}>
      <MyTextInput createTask={createTask} navigation={navigation} />
    </View>
  );
};
export default NewTask;
