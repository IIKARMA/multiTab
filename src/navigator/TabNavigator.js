import * as React from "react";
import { Button, Text, View, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CalendarScreen, MainScreen } from "../screens";
import HomeNavigator from "./HomeNavigator";
import { theme } from "../core/colors";
const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          alignSelf: "center",
          width: "50%",
          marginBottom: 20,
          paddingHorizontal: 10,
          alignItems: "center",
          borderRadius: 20,
          borderTopWidth: 0,
          backgroundColor: "#333",
        },
      }}>
      <Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let iconStyle = focused
              ? styles.tabBarIconFocused
              : styles.tabBarIconUnFocused;
            return (
              <View style={styles.focused}>
                <Image
                  style={{ ...styles.tabBarIcon, ...iconStyle }}
                  source={require("../icons/home.png")}
                />
                <Text
                  style={{
                    color: iconStyle.tintColor,
                    display: focused ? "flex" : "none",
                    marginLeft: 5,
                  }}>
                  Main
                </Text>
              </View>
            );
          },
        }}
        name='Main'
        component={MainScreen}
      />
      <Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let iconStyle = focused
              ? styles.tabBarIconFocused
              : styles.tabBarIconUnFocused;
            return (
              <View style={styles.focused}>
                <Image
                  style={{ ...iconStyle, ...styles.tabBarIcon }}
                  source={require("../icons/settings.png")}
                />
                <Text
                  style={{
                    color: iconStyle.tintColor,
                    display: focused ? "flex" : "none",
                    marginLeft: 5,
                  }}>
                  Settings
                </Text>
              </View>
            );
          },
        }}
        name='Settings'
        component={CalendarScreen}
      />
      <Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let iconStyle = focused
              ? styles.tabBarIconFocused
              : styles.tabBarIconUnFocused;
            return (
              <View style={styles.focused}>
                <Image
                  style={{ ...styles.tabBarIcon, ...iconStyle }}
                  source={require("../icons/calendar.png")}
                />
                <Text
                  style={{
                    color: iconStyle.tintColor,
                    display: focused ? "flex" : "none",
                    marginLeft: 5,
                  }}>
                  Main
                </Text>
              </View>
            );
          },
        }}
        name='Settinssgs'
        component={CalendarScreen}
      />
    </Navigator>
  );
};
export default TabNavigator;
const styles = StyleSheet.create({
  tabBarIcon: {
    width: 24,
    height: 24,
  },
  focused: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tabBarIconFocused: {
    opacity: 1,
    tintColor: "#FFD6F6",
  },
  tabBarIconUnFocused: {
    opacity: 0.5,
    tintColor: "#6e668a",
  },
});
