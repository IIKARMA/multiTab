import React from "react";
import { View, Text, Image } from "react-native";
import { CreateTask } from "../../components";
import { theme } from "../../core/colors";
import { useRoute } from "@react-navigation/native";
const NewTask = ({
  isDone,

  background,
  completed,
  setDisableCompleted,
  tags,
  tasks,
  createTask,
  navigation,
  editingTaskTC,
  visibleModal,
  setVisibleModalTC
}) => {
  const { task, isNew } = useRoute().params;

  return (
    <View style={{ backgroundColor: theme.card }}>
      <CreateTask
        isDone={isDone}
        setDisableCompleted={setDisableCompleted}
        completed={completed}
        tags={tags}
        setVisibleModalTC={setVisibleModalTC}
        visibleModal={visibleModal}
        createTask={createTask}
        navigation={navigation}
        editingTaskTC={editingTaskTC}
        editTask={task}
        isNew={isNew}
      />
    </View>
  );
};
export default NewTask;
