import React, { useEffect, useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
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
import { styles } from "./styles";
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
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
              keyboardAppearance='dark'
              autoFocus={true}
              value={headerText}
              onChangeText={(value) => setHeaderText(value)}
              placeholderTextColor={theme.text}
              placeholder={"Название"}
              style={styles.textInput}
            />
            <TextInput
              textBreakStrategy='highQuality'
              keyboardAppearance='dark'
              value={text}
              onChangeText={(value) => setText(value)}
              placeholderTextColor={theme.secondText}
              placeholder={"Описание"}
              style={styles.textInput}
            />
            {completed && (
              <TouchableOpacity
                style={styles.addButton}
                onPress={createNewTask}>
                <Text style={{ padding: 3, textAlign: "center" }}>Готово</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.additionalBar}>
            <NativeBaseProvider>
              <Box style={styles.box}>
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
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
export default MyTextInput;
