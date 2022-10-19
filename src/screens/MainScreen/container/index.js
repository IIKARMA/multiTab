import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getInfo } from "../../../redux/reducers/tasksReducer";
import { useNavigation } from "@react-navigation/native";
import MainScreen from "../";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state"
]);
const mapStateToProps = ({ tasks, app }) => ({
  task: tasks,
  languages: app.languages
});

export default connect(mapStateToProps, { getInfo })(({ task, languages }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfo("tasks"));
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      return unsubscribe;
    });
  }, [task]);

  return (
    <MainScreen navigation={navigation} tasks={task} languages={languages} />
  );
});
