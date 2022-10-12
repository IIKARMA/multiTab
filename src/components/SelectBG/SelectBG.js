import React, { memo, useState } from "react";
import { TouchableOpacity } from "react-native";
import { HStack } from "native-base";

const swatches = [
  "#6d597a",
  "#fca311",
  "#3f8efc",
  "#e63946",
  "#4d908e",
  "#ee6c4d"
];

const SelectBG = ({ setSelectBG, setSelectColor, selectColor }) => {
  return (
    <HStack space={5} justifyContent='center' marginBottom={20}>
      {swatches.map((color, index) => (
        <TouchableOpacity
          onPress={() => {
            setSelectColor(color);
            setSelectBG(color);
          }}
          key={index}
          style={[
            {
              height: 40,
              width: 40,
              borderRadius: 10,
              backgroundColor: color
            },
            color === selectColor && {
              borderWidth: 3,
              borderColor: "#fff"
            }
          ]}
        />
      ))}
    </HStack>
  );
};
export default SelectBG;
