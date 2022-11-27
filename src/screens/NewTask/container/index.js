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
	editingNoteTC,
	createNotes,
	getNotes,
} from "../../../redux/reducers/notesReducer";
import {
	setVisibleModalTC,
	setDisableCompleted,
	getInfo,
	setIsDone,
} from "../../../redux/reducers/directoryReducer";
import NewTask from "../";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
	"Non-serializable values were found in the navigation state",
]);
const mapStateToProps = ({ tasks, directory, app, notes }) => ({
	languages: app.languages,
	tasks: tasks,
	notes: notes,
	visibleModal: directory.visibleModal,
	tags: directory.tags,
	priority: directory.priority,
	difficulty: directory.difficulty,
	completed: directory.completed,
	isDone: directory.isDone,
});

export default connect(mapStateToProps, {
	createNotes,
	setVisibleModalTC,
	createTask,
	setIsDone,
	setDisableCompleted,
	setTask,
	getInfo,
})(
	({
		difficulty,
		tasks,
		visibleModal,
		tags,
		completed,
		priority,
		isDone,
		notes,
		languages,
	}) => {
		const navigation = useNavigation();
		const dispatch = useDispatch();

		useEffect(() => {
			const unsubscribe = navigation.addListener("focus", () => {
				return unsubscribe;
			});
		}, []);

		return (
			<NewTask
				difficulty={difficulty}
				editingNoteTC={editingNoteTC}
				priority={priority}
				notes={notes}
				createNotes={createNotes}
				languages={languages}
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
	}
);
