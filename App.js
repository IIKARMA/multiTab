import * as React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LaunchScreen } from "./src/screens/index";
import store from "./src/redux/store/store";
import { HoldMenuProvider } from "react-native-hold-menu";

import { NativeBaseProvider } from "native-base";
export default function App() {
  return (
    <Provider store={store}>
      <HoldMenuProvider theme='light'>
        <NativeBaseProvider>
          <SafeAreaProvider>
            <NavigationContainer>
              <LaunchScreen />
            </NavigationContainer>
            <StatusBar style='auto' />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </HoldMenuProvider>
    </Provider>
  );
}
