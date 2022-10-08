import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { Button, Container } from "native-base";

const CustomButton = ({ closeModal }) => {
  return (
    <Container
      w={"full"}
      style={{
        position: "absolute",
        bottom: 20,
        alignSelf: "center",
        paddingTop: 35,
      }}>
      <Button
        bg='indigo.600'
        w={"full"}
        textAlign='center'
        onPress={closeModal}
        _text='Готово'>
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            alignSelf: "center",
          }}>
          Добавить
        </Text>
      </Button>
    </Container>
  );
};
export default CustomButton;
