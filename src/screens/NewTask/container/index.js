import React, { useEffect } from "react";

import { connect, useDispatch } from "react-redux";
// import { getInfo } from "../../../redux/reducers/directoryReducer";
import { useNavigation } from "@react-navigation/native";
import {
  createTask,
  editingTaskTC,
  setTask
} from "../../../redux/reducers/tasksReducer";
import {
  setVisibleModalTC,
  setDisableCompleted,
  getInfo,
  setIsDone
} from "../../../redux/reducers/directoryReducer";
import NewTask from "../";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state"
]);
const mapStateToProps = ({ tasks, directory }) => ({
  tasks: tasks,
  visibleModal: directory.visibleModal,
  tags: directory.tags,
  completed: directory.completed,
  isDone: directory.isDone
});

export default connect(mapStateToProps, {
  setVisibleModalTC,
  createTask,
  setIsDone,
  setDisableCompleted,
  setTask,
  getInfo
})(({ tasks, visibleModal, tags, completed, isDone }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfo("tags"));
    const unsubscribe = navigation.addListener("focus", () => {
      return unsubscribe;
    });
  }, []);

  return (
    <NewTask
      isDone={isDone}
      setDisableCompleted={setDisableCompleted}
      completed={completed}
      tasks={tasks}
      tags={tags}
      setVisibleModalTC={setVisibleModalTC}
      visibleModal={visibleModal}
      navigation={navigation}
      editingTaskTC={editingTaskTC}
      createTask={createTask}
    />
  );
});
