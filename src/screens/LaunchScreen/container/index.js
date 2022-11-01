import React, { useEffect } from "react";

import { connect, useDispatch } from "react-redux";
import {
  getInfo,
  createDefaultTags
} from "../../../redux/reducers/directoryReducer";
import { useNavigation } from "@react-navigation/native";
import LaunchScreen from "../";
import { setIsLauched } from "../../../redux/reducers/appReducer";
import { LogBox } from "react-native";
import { getNotes } from "../../../redux/reducers/notesReducer";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state"
]);
const mapStateToProps = ({ app }) => ({
  isLaunched: app.isLaunched
});

export default connect(mapStateToProps, { getInfo, getNotes })(
  ({ isLaunched }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    useEffect(() => {
      if (!isLaunched) {
        dispatch(getInfo("tasks"));
        dispatch(getNotes());
        dispatch(createDefaultTags("tags"));
        dispatch(setIsLauched(true));
      }
    }, []);

    useEffect(() => {
      const unsubscribe = navigation.addListener("focus", () => {
        return unsubscribe;
      });
    }, []);

    return <LaunchScreen />;
  }
);
