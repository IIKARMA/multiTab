import React, { useEffect } from "react";

import { connect } from "react-redux";
// import { getInfo } from "../../../redux/reducers/directoryReducer";
import { useNavigation } from "@react-navigation/native";
import { createTask } from "../../../redux/reducers/tasksReducer";
import NewTask from "../";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);
const mapStateToProps = ({ tasks }) => ({
  tasks: tasks,
});

export default connect(mapStateToProps, {
  createTask,
})(({ getInfo, tasks }) => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});
    return unsubscribe;
  }, [tasks]);

  return <NewTask navigation={navigation} createTask={createTask} />;
});
