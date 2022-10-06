import React, { useEffect } from "react";

import { connect, useDispatch } from "react-redux";
import { getInfo } from "../../../redux/reducers/tasksReducer";

import { useNavigation } from "@react-navigation/native";
import { LogBox } from "react-native";

import ItemList from "../";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);
const mapStateToProps = ({ tasks }) => ({
  task: tasks,
});

export default connect(mapStateToProps, { getInfo })(({ task }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfo("tasks"));
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});

    return unsubscribe;
  }, [task]);

  return <ItemList navigation={navigation} tasks={task} />;
});
