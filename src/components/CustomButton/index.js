import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { Button, Container } from "native-base";
import { marginBottom } from "styled-system";
const CustomButton = ({ closeModal }) => {
  return (
    <Button
      bg='#138382'
      w='full'
      borderRadius={"xl"}
      textAlign='center'
      onPress={closeModal}>
      <Text
        style={{
          textAlign: "center",
          color: "#fff",
          fontWeight: "normal"
        }}>
        Добавить
      </Text>
    </Button>
  );
};
export default CustomButton;
