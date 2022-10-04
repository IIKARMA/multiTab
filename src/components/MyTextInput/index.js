import React, { useEffect, useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Text,
  StyleSheet,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Icon, IconButton, Box, NativeBaseProvider } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { setDisableCompleted } from "../../redux/reducers/directoryReducer";
import { useDispatch } from "react-redux";
const icons = [
  { name: "tag", id: 1 },
  { name: "calendar-clock", id: 2 },
  { name: "palette", id: 3 },
];
import { theme } from "../../core/colors";

const MyTextInput = ({ createTask, navigation }) => {
  const dispatch = useDispatch();

  const [completed, setCompleted] = useState(false);
  const [headerText, setHeaderText] = useState("");
  const [text, setText] = useState("");

  const createNewTask = () => {
    const payload = {
      heading: headerText,
      task: text,
    };
    Keyboard.dismiss();
    dispatch(createTask(payload));
    navigation.goBack();
  };
  useEffect(() => {
    headerText.trim("").length
      ? setCompleted(true)
      : // dispatch(setDisableCompleted(true))
        console.log(headerText.length);
  }, [text, headerText]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          height: "100%",
          padding: 10,
        }}>
        <View
          style={{
            flex: 0.5,
            backgroundColor: theme.card,
            padding: 10,
            borderRadius: 10,
          }}>
          <TextInput
            keyboardAppearance='dark'
            autoFocus={true}
            value={headerText}
            onChangeText={(value) => setHeaderText(value)}
            placeholderTextColor={"#fff"}
            placeholder={"Название"}
            style={{
              opacity: 0.4,
              fontSize: 16,
              paddingBottom: 10,
              color: "#fff",
            }}
          />
          <TextInput
            keyboardAppearance='dark'
            textBreakStrategy='highQuality'
            value={text}
            onChangeText={(value) => setText(value)}
            placeholderTextColor={"#fff"}
            placeholder={"Описание"}
            style={{
              paddingTop: 10,
              paddingBottom: 20,
              fontSize: 16,
              opacity: 0.4,
              color: "#fff",
            }}
          />
          {completed && (
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: 10,
                backgroundColor: theme.secondText,
                width: "95%",
                alignSelf: "center",
                marginBottom: 10,
                borderRadius: 10,
              }}
              onPress={createNewTask}>
              <Text style={{ padding: 3, textAlign: "center" }}>Готово</Text>
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            alignSelf: "center",
            marginTop: 10,
            flexDirection: "row",
            width: "50%",
          }}>
          <NativeBaseProvider>
            <Box
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
              {icons.map((value) => (
                <IconButton
                  key={value.id.toString()}
                  mb='4'
                  variant='solid'
                  bg='blueGray.600'
                  colorScheme='coolGray'
                  borderRadius='md'
                  icon={
                    <Icon
                      as={MaterialCommunityIcons}
                      size='8'
                      name={value.name}
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color='warmGray.50'
                    />
                  }
                />
              ))}
            </Box>
          </NativeBaseProvider>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default MyTextInput;
const styles = StyleSheet.create({});
