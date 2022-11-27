import { createRef, useRef, useEffect, useState } from "react";
import { StyleSheet, FlatList, TouchableOpacity, Switch } from "react-native";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { Icon, Text, Box, View } from "native-base";
import { visibleWidgetsTC } from "../../redux/reducers/directoryReducer";
import { theme } from "../../core/colors";
import CardFlip from "react-native-card-flip";
import { useDispatch } from "react-redux";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
const SettingsActionSheet = ({ payload }) => {
	const dispatch = useDispatch();
	const [widgets, setWidgets] = useState(
		payload.visibleWidgets.map((widget) => (
			<TouchableOpacity key={widget.id} style={styles.card}>
				<Icon as={Feather} name={widget.icon} color={"amber.400"} size='20' />
				<Text
					textAlign='right'
					fontSize={18}
					color={"text.100"}
					fontWeight={"black"}>
					{widget.value}
				</Text>
				<Switch
					onValueChange={() => {
						handleVisible(widget.id, !widget.visible);
					}}
					value={widget.visible}
				/>
			</TouchableOpacity>
		))
	);
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => (previousState) => !previousState;
	const refCard = [createRef()];

	const handleVisible = (id, visible) => {
		dispatch(visibleWidgetsTC(id, visible));
	};

	useEffect(() => {
		setWidgets(
			payload.visibleWidgets.map((widget) => (
				<View key={widget.id} style={styles.card}>
					<Icon as={Feather} name={widget.icon} color={"amber.400"} size='20' />
					<Text
						textAlign='right'
						fontSize={18}
						color={"text.100"}
						fontWeight={"black"}>
						{widget.value}
					</Text>
					<Switch
						thumbColor={widget.visible ? "#f5dd4b" : "#f4f3f4"}
						onValueChange={() => {
							handleVisible(widget.id, !widget.visible);
						}}
						value={widget.visible}
					/>
				</View>
			))
		);
	}, [payload.visibleWidgets]);

	return (
		<ActionSheet
			gestureEnabled
			headerAlwaysVisible
			isModal
			animated
			id='settingsSheet'
			containerStyle={styles.container}
			statusBarTranslucent>
			<View style={{ alignSelf: "flex-start", padding: 15 }}>
				<Text
					textAlign={"left"}
					style={{
						marginBottom: 10,
						paddingTop: 10,
						fontSize: 28,
						fontWeight: "bold",
						color: theme.text,
					}}>
					Віджети
				</Text>
				<Text
					textAlign={"left"}
					style={{
						marginBottom: 10,
						fontSize: 22,
						fontWeight: "600",
						color: theme.secondText,
					}}>
					Вибирайте віджети, які потрібні вам для роботи
				</Text>
				<Text
					textAlign='left'
					style={{
						fontSize: 16,
						fontWeight: "italic",
						color: theme.secondText,
					}}>
					Щоб відобразити або сховати віджет тикніть по карточці
				</Text>
				{/* {widgets} */}
				<Text
					style={{
						textAlign: "center",
						marginBottom: 10,
						paddingTop: 10,
						fontSize: 28,
						fontWeight: "bold",
						color: theme.text,
					}}>
					СКОРО
				</Text>
			</View>
		</ActionSheet>
	);
};

export default SettingsActionSheet;
const styles = StyleSheet.create({
	container: {
		paddingBottom: 20,
		backgroundColor: theme.background,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		opacity: 1,
	},
	cardContainer: {
		width: 180,
		height: 100,
	},
	card: {
		justifyContent: "space-between",
		flexDirection: "row",
		paddingVertical: 10,
		width: 180,
		height: 120,
		backgroundColor: "#FE474C",
		borderRadius: 5,
		shadowColor: "rgba(0,0,0,0.5)",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.5,
	},
	card1: {
		backgroundColor: "#FE474C",
	},
	card2: {
		backgroundColor: "#333",
	},
});
