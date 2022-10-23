import React from "react";
import { View, Text, Image } from "react-native";
import { CreateTask } from "../../components";
import { theme } from "../../core/colors";
import { useRoute } from "@react-navigation/native";
const NewTask = ({
  isDone,
  languages,
  background,
  completed,
  setDisableCompleted,
  tags,
  tasks,
  createTask,
  navigation,
  editingTaskTC,
  createNotes,
  visibleModal,
  setVisibleModalTC
}) => {
  const { type, task, isNew } = useRoute().params;
  console.log("====================================");
  console.log(task);
  console.log("====================================");
  return (
    <View style={{ backgroundColor: theme.card }}>
      <CreateTask
        createNotes={createNotes}
        type={type}
        languages={languages}
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
