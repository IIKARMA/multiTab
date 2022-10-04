import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "../../navigator/HomeNavigator";

const LaunchScreen = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};
export default LaunchScreen;
