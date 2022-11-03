import React, { useState } from "react";
import { Dimensions } from "react-native";
import { Modal, Center, View, theme } from "native-base";
import {
  CustomCalendar,
  CustomSelectTag,
  CustomSwatcherColor,
  CustomTimePicker,
  CustomPriorityAndDifficulty
} from "../";

import { useDispatch } from "react-redux";
const CustomModal = ({
  difficulty,
  selectDifficulty,
  setSelectDifficulty,
  setSelectPriority,
  priority,
  selectPriority,
  setDatePickerVisibility,
  isDatePickerVisible,
  languages,
  selectDate,
  setSelectTime,
  setSelectDate,
  name,
  selectBG,
  setSelectBG,
  tags,
  activeTag,
  handleSelectTag,
  modal,
  setVisibleModalTC
}) => {
  const dispatch = useDispatch();

  const [selectColor, setSelectColor] = useState(selectBG && selectBG);
  const closeModal = () => {
    dispatch(setVisibleModalTC(false));
  };
  const renderMetod = (name) => {
    switch (name) {
      case "clock":
        return (
          <CustomTimePicker
            closeModal={closeModal}
            setSelectTime={setSelectTime}
            isDatePickerVisible={isDatePickerVisible}
            setDatePickerVisibility={setDatePickerVisibility}
          />
        );
      case "tag":
        return (
          <CustomSelectTag
            languages={languages}
            activeTag={activeTag}
            closeModal={closeModal}
            theme={theme}
            tags={tags}
            handleSelectTag={handleSelectTag}
          />
        );
      case "calendar-clock":
        return (
          <CustomCalendar
            isDatePickerVisible={isDatePickerVisible}
            setDatePickerVisibility={setDatePickerVisibility}
            languages={languages}
            setSelectTime={setSelectTime}
            selectDate={selectDate}
            setSelectDate={setSelectDate}
            closeModal={closeModal}
            theme={theme}
          />
        );
      case "palette":
        return (
          <CustomSwatcherColor
            languages={languages}
            closeModal={closeModal}
            setSelectBG={setSelectBG}
            selectColor={selectColor}
            setSelectColor={setSelectColor}
            theme={theme}
          />
        );
      case "flag":
        return (
          <CustomPriorityAndDifficulty
            type={name}
            languages={languages}
            closeModal={closeModal}
            priority={priority}
            selectPriority={selectPriority}
            setSelectPriority={setSelectPriority}
          />
        );
      case "brain":
        return (
          <CustomPriorityAndDifficulty
            type={name}
            selectDifficulty={selectDifficulty}
            setSelectDifficulty={setSelectDifficulty}
            difficulty={difficulty}
            languages={languages}
            closeModal={closeModal}
          />
        );
      default:
        return;
    }
  };
  return (
    <Center>
      <Modal
        avoidKeyboard
        p={"2"}
        animationPreset='slide'
        style={{
          borderBottomWidth: 0,
          marginBottom: 0,
          marginTop: "auto",
          backfaceVisibility: "hidden"
        }}
        size='full'
        justifyContent='flex-end'
        isOpen={modal}
        onClose={closeModal}>
        <Modal.Content
          rounded='20'
          background={"#2D3142"}
          maxHeight={`${Dimensions.get("window").height - 150}px`}>
          <Modal.CloseButton
            _icon={{ color: "muted.200" }}
            bg='#2D3142'
            colorScheme='#fff'
          />
          <View>{renderMetod(name)}</View>
        </Modal.Content>
      </Modal>
    </Center>
  );
};
export default CustomModal;
