import React from "react";
import { View, Text, Image } from "react-native";
import { CreateNotes, CreateTask } from "../../components";
import { theme } from "../../core/colors";
import { useRoute } from "@react-navigation/native";
const NewTask = ({
  isDone,
  priority,
  editingNoteTC,
  notes,
  languages,
  createNotes,
  difficulty,
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
  const { type, task, isNew } = useRoute().params;

  return (
    <View style={{ backgroundColor: theme.card }}>
      <CreateTask
        difficulty={difficulty}
        editingNoteTC={editingNoteTC}
        priority={priority}
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
        editTask={task && task}
        isNew={isNew}
      />
    </View>
  );
};
export default NewTask;
