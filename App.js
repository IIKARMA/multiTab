import * as React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LaunchScreen from "./src/screens/LaunchScreen";
import store from "./src/redux/store/store";
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <LaunchScreen />
        <StatusBar style='auto' />
      </SafeAreaProvider>
    </Provider>
  );
}
