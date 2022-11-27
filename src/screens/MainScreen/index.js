import React, { useState, useEffect } from "react";
import {
	ImageBackground,
	StyleSheet,
	View,
	Text,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import MenuNavigator from "../../navigator/menuNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { ItemList } from "../";
import { styles } from "./styles";
import { Header, PomodoroBlock, ButtonAction } from "../../components";
import { SheetManager } from "react-native-actions-sheet";
import { theme } from "native-base";
const MainScreen = ({
	visibleWidgets,
	navigation,
	tasks,
	notes,
	languages,
}) => {
	const [widget, setWidget] = useState(
		visibleWidgets.map((widget) => {
			return (
				widget.visible && (
					<ItemList
						navigation={navigation}
						items={tasks.tasks}
						languages={languages}
						type={widget.type}
					/>
				)
			);
		})
	);
	useEffect(() => {
		console.log(visibleWidgets);
		setWidget(
			visibleWidgets.map((widget) => {
				return (
					widget.visible && (
						<ItemList
							key={widget.id}
							navigation={navigation}
							items={widget.type === "tasks" ? tasks.tasks : notes.notes}
							languages={languages}
							type={widget.type}
						/>
					)
				);
			})
		);
	}, [visibleWidgets, tasks, notes]);
	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				style={StyleSheet.absoluteFill}
				source={require("../../icons/back.png")}
				resizeMode='cover'
			/>
			<Header navigation={navigation} />

			<View
				style={{
					flex: 1,
					flexDirection: "column",
					justifyContent: "flex-start",
				}}>
				{widget}

				<PomodoroBlock languages={languages} />
				<ButtonAction
					handleButton={() =>
						SheetManager.show("settingsSheet", {
							payload: { visibleWidgets: visibleWidgets },
						})
					}
				/>
				<View style={styles.actionMenu}>
					<MenuNavigator />
				</View>
			</View>
		</SafeAreaView>
	);
};
export default MainScreen;
