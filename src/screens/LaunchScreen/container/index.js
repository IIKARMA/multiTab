import React, { useEffect } from "react";

import { connect, useDispatch } from "react-redux";
import {
	// getInfo,
	createDefaultInfo,
} from "../../../redux/reducers/directoryReducer";
import { useNavigation } from "@react-navigation/native";
import LaunchScreen from "../";
import { setIsLauchedTC } from "../../../redux/reducers/appReducer";
import { LogBox } from "react-native";
import { getNotes } from "../../../redux/reducers/notesReducer";
import { getInfo } from "../../../redux/reducers/tasksReducer";
LogBox.ignoreLogs([
	"Non-serializable values were found in the navigation state",
]);
const mapStateToProps = ({ app }) => ({
	isLaunched: app.isLaunched,
});

export default connect(mapStateToProps, {
	getInfo,
	createDefaultInfo,
	getNotes,
	setIsLauchedTC,
})(({ isLaunched }) => {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	useEffect(() => {
		if (!isLaunched) {
			dispatch(setIsLauchedTC());
			dispatch(getNotes());
			dispatch(createDefaultInfo("tags"));
			dispatch(createDefaultInfo("widgets"));
			dispatch(getInfo("tasks"));
			dispatch(getInfo("widgets"));
			// dispatch(getInfo("tags"));
		}
	}, [isLaunched]);

	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			return unsubscribe;
		});
	}, []);

	return <LaunchScreen />;
});
