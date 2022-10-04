import { AppRegistry } from "react-native";

import "intl";
import "intl/locale-data/jsonp/en";
import App from "./App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
AppRegistry.registerComponent("main", () => App);
