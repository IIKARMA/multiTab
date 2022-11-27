import * as React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LaunchScreen } from "./src/screens/index";
import store from "./src/redux/store/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";
import { SheetProvider } from "react-native-actions-sheet";
import "./src/components/CustomActionSheet/sheet";
import "./src/components/SettingsActionSheet/sheet";
export default function App() {
	return (
		<Provider store={store}>
			<NativeBaseProvider>
				<SafeAreaProvider>
					<NavigationContainer>
						<SheetProvider>
							<LaunchScreen />
						</SheetProvider>
					</NavigationContainer>
					<StatusBar style='auto' />
				</SafeAreaProvider>
			</NativeBaseProvider>
		</Provider>
	);
}
