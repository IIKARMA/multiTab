import React, { useEffect } from "react";

import { connect, useDispatch } from "react-redux";
// import { getInfo } from "../../../redux/reducers/directoryReducer";
import { useNavigation } from "@react-navigation/native";
import {
  createTask,
  editingTaskTC,
  setTask,
} from "../../../redux/reducers/tasksReducer";
import {
  setVisibleModalTC,
  getInfo,
} from "../../../redux/reducers/directoryReducer";
import NewTask from "../";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);
const mapStateToProps = ({ tasks, directory }) => ({
  tasks: tasks,
  visibleModal: directory.visibleModal,
  tags: directory.tags,
});

export default connect(mapStateToProps, {
  setVisibleModalTC,
  createTask,
  setTask,
  getInfo,
})(({ tasks, visibleModal, tags }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfo("tags"));
  }, []);

  return (
    <NewTask
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
