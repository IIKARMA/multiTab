import React, { useEffect } from "react";

import { connect, useDispatch } from "react-redux";
import { getInfo } from "../../../redux/reducers/tasksReducer";

import { useNavigation } from "@react-navigation/native";
import { LogBox } from "react-native";

import ItemList from "../";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state"
]);
const mapStateToProps = ({ tasks, app }) => ({
  languages: app.languages,
  task: tasks
});

export default connect(mapStateToProps, { getInfo })(({ task, languages }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfo("tasks"));
  }, []);
  console.log("====================================");

  console.log("====================================");
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});

    return unsubscribe;
  }, [task]);

  return (
    <ItemList navigation={navigation} tasks={task} languages={languages} />
  );
});
