import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getInfo } from "../../../redux/reducers/tasksReducer";
import { useNavigation } from "@react-navigation/native";
import MainScreen from "../";
import { LogBox } from "react-native";
import { getNotes } from "../../../redux/reducers/notesReducer";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state"
]);
const mapStateToProps = ({ tasks, app, notes }) => ({
  task: tasks,
  notes: notes,
  languages: app.languages
});

export default connect(mapStateToProps, { getInfo })(
  ({ task, notes, languages }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
      const unsubscribe = navigation.addListener("focus", () => {
        return unsubscribe;
      });
    }, []);
    console.log("====================================");
    console.log(notes?.notes);
    console.log("====================================");
    return (
      <MainScreen
        navigation={navigation}
        tasks={task}
        notes={notes}
        languages={languages}
      />
    );
  }
);
