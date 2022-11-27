import { memo } from "react";
import { View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";
import { useDispatch } from "react-redux";
import TaskItem from "./TaskItem";
import NotesItem from "./NotesItem";
const CustomItemComp = ({ type, item, languages }) => {
	const dispatch = useDispatch();

	const showAction = () => {
		SheetManager.show("sheets", {
			payload: { type, item, languages },
		});
	};

	return (
		<View>
			{type === "notes" ? (
				<TaskItem dispatch={dispatch} item={item} showAction={showAction} />
			) : (
				<NotesItem item={item} showAction={showAction} />
			)}
		</View>
	);
};
const CustomItem = memo(CustomItemComp);
export default CustomItem;
