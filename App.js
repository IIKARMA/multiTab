import * as React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LaunchScreen from "./src/screens/LaunchScreen";
import store from "./src/redux/store/store";
import { NativeBaseProvider } from "native-base";
export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <LaunchScreen />
          <StatusBar style='auto' />
        </SafeAreaProvider>
      </NativeBaseProvider>
    </Provider>
  );
}
