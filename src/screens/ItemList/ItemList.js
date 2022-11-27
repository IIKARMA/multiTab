import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./style";
import { CustomItem } from "../../components";
import { useDispatch } from "react-redux";

const ItemList = ({ navigation, items, languages, type }) => {
	const dispatch = useDispatch();
	const [listTasks, setListTask] = useState(items);
	useEffect(() => {
		setListTask(items);
	}, [items]);
	return (
		<View style={styles.container}>
			<View>
				<View style={styles.headerContainer}>
					<TouchableOpacity
						style={styles.box}
						onPress={() =>
							navigation.navigate("ItemList", {
								title: type === "tasks" ? languages.notes : languages.tasks,
								items,
							})
						}>
						<Icon
							as={MaterialCommunityIcons}
							size='6'
							name={type === "notes" ? "format-list-checks" : "file-edit"}
							color={type === "notes" ? "#e63946" : "amber.400"}
						/>
						<Text style={styles.headerText}>
							{type === "notes" ? languages.tasks : languages.notes}
						</Text>
						{type === "notes" && listTasks.length > 0 && (
							<View style={styles.completedCount}>
								<Text style={[styles.textItem, { fontSize: 14 }]}>
									{listTasks.filter((item) => item.completed).length}/
									{listTasks.length}
								</Text>
							</View>
						)}
					</TouchableOpacity>
					<View style={{ flexDirection: "row", alignItem: "center" }}>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("NewTask", {
									isNew: true,
									type,
								})
							}
							style={styles.addButton}>
							<Text style={styles.addText}>{languages.add}</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("ItemList", {
									title: type === "tasks" ? languages.notes : languages.tasks,
									items,
								})
							}>
							<Icon
								as={MaterialCommunityIcons}
								size='6'
								name='chevron-right'
								color='gray.500'
							/>
						</TouchableOpacity>
					</View>
				</View>
				<FlatList
					horizontal={type === "tasks" && true}
					style={{ maxHeight: 160 }}
					data={listTasks}
					keyExtractor={(item) => item.id}
					renderItem={(item) => (
						<CustomItem languages={languages} type={type} item={item} />
					)}
				/>
			</View>
		</View>
	);
};
export default ItemList;
