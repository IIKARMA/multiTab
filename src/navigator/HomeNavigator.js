import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { MainScreen, NewTask } from "../screens/";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { setDisableCompleted } from "../redux/reducers/directoryReducer";
import { Icon, NativeBaseProvider } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../core/colors";
import { useSelector } from "react-redux";
import { paddingRight } from "styled-system";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => {
  const completed = useSelector(({ directory }) => directory.completed);
  const navigation = useNavigation();
  console.log(completed);
  return (
    <Navigator
      initialRouteName={"Home"}
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        presentation: "modal",
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
          backgroundColor: theme.background,
        },
      }}>
      <Screen component={MainScreen} name='Home' options={{}} />
      <Screen
        initialParams={{ id: 2 }}
        component={NewTask}
        name='NewTask'
        options={({ route }) => ({
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            backgroundColor: theme.background,
          },
          title: route.params.title,
          headerLeft: () => (
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <NativeBaseProvider>
                <TouchableOpacity
                  onPress={() => {
                    Keyboard.dismiss();
                    navigation.goBack();
                  }}>
                  <Icon
                    as={MaterialCommunityIcons}
                    size='10'
                    name='chevron-left'
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color='warmGray.50'
                  />
                </TouchableOpacity>
              </NativeBaseProvider>
            </View>
          ),
          // headerRight: () =>
          //   completed && (
          //     <View
          //       style={{
          //         alignItems: "center",
          //         flexDirection: "row",
          //         paddingRight: 16,
          //       }}>
          //       <TouchableOpacity>
          //         <Text>Готово</Text>
          //       </TouchableOpacity>
          //     </View>
          //   ),
        })}
      />
    </Navigator>
  );
};

export default HomeNavigator;
