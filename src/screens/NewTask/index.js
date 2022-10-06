import React from "react";
import { View, Text, Image } from "react-native";
import { MyTextInput } from "../../components";
import { theme } from "../../core/colors";
import { useRoute } from "@react-navigation/native";
const NewTask = ({ createTask, navigation, editingTaskTC }) => {
  const { task, isNew } = useRoute().params;
  console.log(task);
  return (
    <View style={{ backgroundColor: theme.background }}>
      <MyTextInput
        createTask={createTask}
        navigation={navigation}
        editingTaskTC={editingTaskTC}
        editTask={task && task}
        isNew={isNew}
      />
    </View>
  );
};
export default NewTask;
