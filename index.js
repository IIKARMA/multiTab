import "react-native-gesture-handler";
import { AppRegistry } from "react-native";

import "intl";
import "intl/locale-data/jsonp/en";
import { registerRootComponent } from "expo";
import App from "./App";
import appName from "./app.json";
registerRootComponent(App);
