import { View, StyleSheet, TouchableOpacity } from "react-native";
import * as Native from "native-base";
import Checkbox from "expo-checkbox";
import { completedNotes } from "../../redux/reducers/notesReducer";
import { useDispatch } from "react-redux";
import { theme } from "../../core/colors";

const TaskItem = ({ dispatch, item, showAction }) => {
	const onCompleted = (id) => dispatch(completedNotes(id));

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={showAction}>
				<View style={styles.itemStyle}>
					<View style={{ flexDirection: "row" }}>
						<Checkbox
							style={styles.checkbox}
							value={item.item.completed}
							onValueChange={() => onCompleted(item.item.id)}
						/>
						<Native.Text
							style={styles.text}
							strikeThrough={item.item.completed}>
							{item.item.heading}
						</Native.Text>
					</View>

					{item.item.priority || item.item.difficulty ? (
						<View style={{ flexDirection: "row" }}>
							{item.item?.priority && (
								<Native.Text
									style={[
										styles.priorityText,
										{
											color: item.item.priority.color,
											backgroundColor: item.item.priority.selectColor,
										},
									]}>
									{item.item.priority.value}
								</Native.Text>
							)}
							{item.item?.difficulty && (
								<Native.Text
									style={[
										styles.priorityText,
										{
											color: item.item.difficulty.color,
											backgroundColor: item.item.difficulty.selectColor,
										},
									]}>
									{item.item.difficulty.value}
								</Native.Text>
							)}
						</View>
					) : null}
				</View>
			</TouchableOpacity>
		</View>
	);
};
export default TaskItem;
const styles = StyleSheet.create({
	priorityText: {
		overflow: "hidden",
		marginLeft: 10,
		marginTop: 5,
		textAlign: "center",
		paddingHorizontal: 10,
		borderRadius: 10,
		fontSize: 12,
	},
	container: {
		flex: 1,
		marginHorizontal: 2,
		marginVertical: 6,
	},
	section: {
		flexDirection: "column",
		alignItems: "flex-start",
	},
	text: {
		marginLeft: 5,
		textAlign: "left",
		color: theme.secondText,
		fontSize: 18,
		fontWeight: "500",
		letterSpacing: 1.5,
	},
	paragraph: {
		fontSize: 15,
	},
	itemStyle: {
		paddingHorizontal: 8,
		position: "relative",
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		width: "100%",
	},
	checkbox: { borderRadius: 5, marginRight: 7 },
});
