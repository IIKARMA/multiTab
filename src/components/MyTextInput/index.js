import React, { useEffect, useState, useRef, createRef } from "react";
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  Animated,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Icon, IconButton, Modal, Box } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { CustomModal } from "../";
const icons = [
  { name: "tag", id: 1 },
  { name: "calendar-clock", id: 2 },
  { name: "palette", id: 3 },
];
import { styles } from "./styles";
import { theme } from "../../core/colors";

const MyTextInput = ({
  createTask,
  editingTaskTC,
  navigation,
  editTask,
  isNew,
}) => {
  const dispatch = useDispatch();
  const [modal, setModalVisible] = useState(false);

  const [completed, setCompleted] = useState(false);
  const [headerText, setHeaderText] = useState(
    (editTask && editTask.heading) || ""
  );
  const [text, setText] = useState((editTask && editTask.task) || "");

  const createNewTask = () => {
    const payload = {
      heading: headerText,
      task: text,
    };

    isNew
      ? dispatch(createTask(payload))
      : dispatch(editingTaskTC(payload, editTask && editTask.id));
    Keyboard.dismiss();
    navigation.goBack();
  };
  useEffect(() => {
    headerText.trim("").length
      ? setCompleted(true)
      : // dispatch(setDisableCompleted(true))
        console.log(headerText.length);
  }, [text, headerText]);

  const onOpen = () => {};
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
                <Text style={{ padding: 3, textAlign: "center" }}>
                  {isNew ? "Добавить" : "Редактировать"}
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.additionalBar}>
            <Box style={styles.box}>
              {icons.map((value) => (
                <IconButton
                  onPress={() => {
                    setModalVisible(true);
                    Keyboard.dismiss();
                  }}
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
            <View style={{ paddingHorizontal: 15 }}>
              {modal && <CustomModal modal={modal} />}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
export default MyTextInput;
