import React, { useEffect, useState, useRef } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Icon, IconButton, HStack, Button } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { CustomModal } from "../";
import { BlurView } from "expo-blur";
import { styles } from "./styles";
import { theme } from "../../core/colors";
import { setIsDone } from "../../redux/reducers/directoryReducer";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import moment from "moment";

const icons = [
  {
    name: "tag",
    id: 1
  },
  {
    name: "palette",
    id: 3
  },
  {
    name: "calendar-clock",
    id: 2
  },
  {
    name: "clock",
    id: 4
  }
];
const iconsTask = [
  {
    name: "tag",
    id: 1
  },
  { id: 3, name: "brain" },
  { id: 5, name: "flag" },
  {
    name: "calendar-clock",
    id: 2
  }
];
const CreateTask = ({
  type,
  difficulty,
  editingNoteTC,
  priority,
  createNotes,
  isDone,
  languages,
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
  const [activeIcons, setActiveIcons] = useState([]);
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
  const [selectPriority, setSelectPriority] = useState(
    (editTask && editTask.priority) || {}
  );
  const [_completed, setCompleted] = useState(
    (editTask && editTask.completed) || false
  );
  const [selectDifficulty, setSelectDifficulty] = useState(
    (editTask && editTask.difficulty) || {}
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
    (editTask && editTask.selectTime) || ""
  );
  const searchInput = useRef(null);

  const openModal = (dispatch, type) => {
    dispatch(setVisibleModalTC(!visibleModal));

    setName(type);
    Keyboard.dismiss();
  };
  const createNewTask = () => {
    const payload = {
      heading: headerText && headerText,
      task: text,
      activeTags: activeTag,
      background: selectBG,
      selectDate: selectDate
        ? selectDate
        : moment(new Date()).format("YYYY-MM-DD"),
      selectTime: selectTime
    };

    isNew
      ? dispatch(createTask(payload))
      : dispatch(editingTaskTC(payload, editTask.id));
    Keyboard.dismiss();
    dispatch(setDisableCompleted(false));
    dispatch(setIsDone(!isDone));
  };
  const createNewNotes = () => {
    const payload = {
      heading: headerText && headerText,
      completed: _completed,
      activeTags: activeTag,
      difficulty: selectDifficulty,
      priority: selectPriority,
      selectDate: selectDate
        ? selectDate
        : moment(new Date()).format("YYYY-MM-DD"),
      selectTime: selectTime
    };

    isNew
      ? dispatch(createNotes(payload))
      : dispatch(editingNoteTC(payload, editTask.id));

    Keyboard.dismiss();
    dispatch(setDisableCompleted(false));
    dispatch(setIsDone(!isDone));
  };

  useEffect(() => {
    headerText.trim("").length || text.trim("").length
      ? dispatch(setDisableCompleted(true))
      : dispatch(setDisableCompleted(false));
  }, [text, headerText]);
  useEffect(() => {
    isDone && completed && type === "tasks" && createNewTask();
    isDone && completed && type === "notes" && createNewNotes();
  }, [isDone]);
  useEffect(() => {
    setActiveIcons(type === "notes" ? iconsTask : icons);
  }, []);
  function hideKeyboard() {
    keyboard == "keyboard" ? searchInput.current.focus() : Keyboard.dismiss();
  }
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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
                placeholder={languages.name}
                style={styles.textInput}
              />

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
                placeholder={languages.description}
                style={styles.textInput}
              />

              <View style={styles.additionalBar}>
                <ScrollView
                  style={{ flex: 1, paddingRight: 15, marginRight: 5 }}
                  horizontal>
                  <HStack space={1} style={styles.box}>
                    {activeIcons?.map((value) => (
                      <Button
                        style={{
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                        onPress={() => openModal(dispatch, value.name)}
                        key={value.id.toString()}
                        mb='2'
                        // colorScheme={"coolGray.400"}
                        bg={"coolGray.700"}
                        borderRadius='xl'
                        leftIcon={
                          <Icon
                            as={MaterialCommunityIcons}
                            size='6'
                            name={value.name}
                            color={
                              value.name === "palette"
                                ? selectBG === "rgba(54,58,75,0.6)"
                                  ? "warmGray.50"
                                  : selectBG
                                : value.name === "flag"
                                ? selectPriority.color
                                  ? selectPriority.color
                                  : "warmGray.50"
                                : value.name === "brain"
                                ? selectDifficulty.color
                                  ? selectDifficulty.color
                                  : "warmGray.50"
                                : "warmGray.50"
                            }
                          />
                        }>
                        {selectDate && value.name === "calendar-clock" ? (
                          <Text style={styles.text}>
                            {moment(selectDate).format("DD MMM")}
                          </Text>
                        ) : selectTime && value.name === "clock" ? (
                          <Text style={styles.text}>
                            {moment(selectTime).format("HH:mm")}
                          </Text>
                        ) : null}
                      </Button>
                    ))}
                  </HStack>
                </ScrollView>

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
                  selectDifficulty={selectDifficulty}
                  setSelectDifficulty={setSelectDifficulty}
                  difficulty={difficulty}
                  priority={priority}
                  selectPriority={selectPriority}
                  setSelectPriority={setSelectPriority}
                  isDatePickerVisible={isDatePickerVisible}
                  setDatePickerVisibility={setDatePickerVisibility}
                  setSelectTime={setSelectTime}
                  languages={languages}
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
