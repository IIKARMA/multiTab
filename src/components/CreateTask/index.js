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
  Animated
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Icon, IconButton, Modal, Box, HStack, Button } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { CustomModal } from "../";
import { BlurView } from "expo-blur";
import { styles } from "./styles";
import { theme } from "../../core/colors";
import { setIsDone } from "../../redux/reducers/directoryReducer";
import moment from "moment";

const icons = [
  {
    name: "bookmark",
    id: 1
  },
  {
    name: "palette",
    id: 3
  },
  {
    name: "calendar-clock",
    id: 2
  }
];
const CreateTask = ({
  isDone,
  setDisableCompleted,
  completed,
  task,
  tags,
  visibleModal,
  setVisibleModalTC,
  createTask,
  editingTaskTC,
  navigation,
  editTask,
  isNew
}) => {
  const [keyboard, setKeyboard] = useState("keyboard");
  const dispatch = useDispatch();
  const [_name, setName] = useState("");
  const [headerText, setHeaderText] = useState(
    (editTask && editTask.heading) || ""
  );
  const [text, setText] = useState((editTask && editTask.task) || "");
  const [activeTag, setActiveTag] = useState(
    (editTask && editTask.activeTags) || []
  );

  const [selectBG, setSelectBG] = useState(
    (editTask && editTask.background) || theme.card
  );
  const handleSelectTag = (tag) => {
    if (activeTag.find((aTag) => aTag.id === tag.id)) {
      setActiveTag(activeTag.filter((aTag) => aTag.id !== tag.id));
    } else {
      setActiveTag([...activeTag, tag]);
    }
  };
  const [selectDate, setSelectDate] = useState(
    (editTask && editTask.selectDate) || ""
  );
  const [selectTime, setSelectTime] = useState(
    (editTask && editTask.selectTime) || moment(new Date()).format("HH:mm")
  );
  const searchInput = useRef(null);

  const openModal = (dispatch, type) => {
    dispatch(setVisibleModalTC(!visibleModal));
    setName(type);
    Keyboard.dismiss();
  };
  const createNewTask = () => {
    const payload = {
      heading: headerText,
      task: text,
      activeTags: activeTag,
      background: selectBG,
      selectDate: selectDate
    };

    isNew
      ? dispatch(createTask(payload))
      : dispatch(editingTaskTC(payload, editTask.id));
    Keyboard.dismiss();
    dispatch(setDisableCompleted(false));
    dispatch(setIsDone(!isDone));
  };

  useEffect(() => {
    headerText.trim("").length
      ? dispatch(setDisableCompleted(true))
      : dispatch(setDisableCompleted(false));
  }, [text, headerText]);
  useEffect(() => {
    isDone && completed && createNewTask();
  }, [isDone]);

  function hideKeyboard() {
    keyboard == "keyboard" ? searchInput.current.focus() : Keyboard.dismiss();
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <BlurView tint='dark' intensity={Platform.OS === "ios" ? 50 : 90}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}>
          <View style={styles.container}>
            {activeTag && activeTag.length ? (
              <View style={{ height: 30, marginBottom: 10 }}>
                <ScrollView horizontal={true}>
                  {activeTag.map((tag) => (
                    <View
                      key={tag.id}
                      style={{
                        backgroundColor: tag.color,
                        alignItems: "center",
                        marginRight: 5,
                        borderRadius: 5
                      }}>
                      <Text style={{ padding: 5, color: theme.text }}>
                        {tag.value}
                      </Text>
                    </View>
                  ))}
                </ScrollView>
              </View>
            ) : null}
            <View
              style={[
                styles.inputContainer,
                { borderColor: selectBG === "#fff" ? theme.card : selectBG }
              ]}>
              <TextInput
                onFocus={() => setKeyboard("keyboard-off")}
                onBlur={() => setKeyboard("keyboard")}
                ref={searchInput}
                keyboardAppearance='dark'
                value={headerText}
                onChangeText={(value) => setHeaderText(value)}
                placeholderTextColor={theme.text}
                placeholder={"Название"}
                style={styles.textInput}
              />
              {task?.activeTags ||
                (activeTag.length > 0 && (
                  <Icon
                    top={-5}
                    right={5}
                    position={"absolute"}
                    as={MaterialCommunityIcons}
                    size='12'
                    name={"bookmark"}
                    _dark={{
                      color: "coolGray.500"
                    }}
                    color='coolGray.500'
                  />
                ))}
              <TextInput
                onFocus={() => setKeyboard("keyboard-off")}
                onBlur={() => setKeyboard("keyboard")}
                multiline
                returnKeyType='next'
                numberOfLines={4}
                textBreakStrategy='highQuality'
                keyboardAppearance='dark'
                value={text}
                onChangeText={(value) => setText(value)}
                placeholderTextColor={theme.secondText}
                placeholder={"Описание"}
                style={styles.textInput}
              />

              {/* {completed && (
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={createNewTask}>
                  <Text style={{ padding: 3, textAlign: "center" }}>
                    {isNew ? "Добавить" : "Редактировать"}
                  </Text>
                </TouchableOpacity>
              )} */}
              <View style={styles.additionalBar}>
                <HStack space={2} style={styles.box}>
                  {icons.map((value) => (
                    <Button
                      onPress={() => openModal(dispatch, value.name)}
                      key={value.id.toString()}
                      mb='2'
                      variant='solid'
                      bg='coolGray.700'
                      colorScheme='coolGray'
                      borderRadius='xl'
                      leftIcon={
                        <Icon
                          as={MaterialCommunityIcons}
                          size='6'
                          name={value.name}
                          _dark={{
                            color: "warmGray.50"
                          }}
                          color={
                            value.name === "palette"
                              ? selectBG === "rgba(54,58,75,0.6)"
                                ? "warmGray.50"
                                : selectBG
                              : "warmGray.50"
                          }
                        />
                      }>
                      {selectDate && value.name === "calendar-clock" && (
                        <Text style={styles.textInput}>
                          {moment(selectDate).format("DD MMM")}
                        </Text>
                      )}
                    </Button>
                  ))}
                </HStack>
                <View></View>
                <IconButton
                  onPress={hideKeyboard}
                  mb='2'
                  variant='solid'
                  bg='coolGray.700'
                  colorScheme='coolGray'
                  borderRadius='xl'
                  icon={
                    <Icon
                      as={MaterialCommunityIcons}
                      size='6'
                      name={keyboard}
                      _dark={{
                        color: "warmGray.50"
                      }}
                      color='warmGray.50'
                    />
                  }
                />
              </View>
            </View>

            <View style={{ paddingHorizontal: 15 }}>
              {visibleModal && (
                <CustomModal
                  setSelectTime={setSelectTime}
                  selectDate={selectDate}
                  setSelectDate={setSelectDate}
                  name={_name}
                  selectBG={selectBG}
                  setSelectBG={setSelectBG}
                  tags={tags}
                  activeTag={activeTag}
                  handleSelectTag={handleSelectTag}
                  modal={visibleModal}
                  setVisibleModalTC={setVisibleModalTC}
                />
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </BlurView>
    </TouchableWithoutFeedback>
  );
};
export default CreateTask;
