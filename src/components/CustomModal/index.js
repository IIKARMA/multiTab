import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { Modal, Center, Button, Container } from "native-base";
import { CreateTag, CustomRadioGroup, CustomButton, SelectTag } from "../";
import { useDispatch } from "react-redux";
const CustomModal = ({
  tags,
  activeTag,
  handleSelectTag,
  modal,
  setVisibleModalTC,
}) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setVisibleModalTC(false));
  };
  return (
    <Center>
      <Modal
        p={"2"}
        animationPreset='slide'
        style={{
          borderBottomWidth: 0,
          marginBottom: 0,
          marginTop: "auto",
          backfaceVisibility: "hidden",
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
          <Modal.Header
            _text={{ color: "text.50", textAlign: "center", fontSize: "lg" }}
            borderBottomWidth='0'
            background='rgba(54,58,75,0.6)'>
            Тэг
          </Modal.Header>
          <Modal.Body
            h={"sm"}
            borderBottom={0}
            background='rgba(54,58,75,0.6)'
            borderColor={"red"}>
            <CreateTag />

            <SelectTag
              tags={tags}
              handleSelectTag={handleSelectTag}
              selectedTags={activeTag}
            />
            <CustomButton closeModal={closeModal} />
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  );
};
export default CustomModal;
