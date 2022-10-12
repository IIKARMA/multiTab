import React, { useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { Modal, Center, HStack, View, theme } from "native-base";
import {
  CreateTag,
  CustomCalendar,
  CustomSelectTag,
  CustomSwatcherColor
} from "../";

import { useDispatch } from "react-redux";
const CustomModal = ({
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
          <View>
            {name === "calendar-clock" && (
              <CustomCalendar
                setSelectTime={setSelectTime}
                selectDate={selectDate}
                setSelectDate={setSelectDate}
                closeModal={closeModal}
                theme={theme}
              />
            )}
            {name === "palette" && (
              <CustomSwatcherColor
                closeModal={closeModal}
                setSelectBG={setSelectBG}
                selectColor={selectColor}
                setSelectColor={setSelectColor}
                theme={theme}
              />
            )}
            {name === "bookmark" && (
              <CustomSelectTag
                activeTag={activeTag}
                closeModal={closeModal}
                theme={theme}
                tags={tags}
                handleSelectTag={handleSelectTag}
              />
            )}
          </View>
        </Modal.Content>
      </Modal>
    </Center>
  );
};
export default CustomModal;
