import React, { useState, useEffect } from "react";
import { Text, TextInput, Dimensions, Keyboard } from "react-native";
import { Icon, IconButton, HStack } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createTags } from "../../redux/reducers/directoryReducer";
import { useDispatch } from "react-redux";
const CreateTag = ({ languages }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const pressHandler = () => {
    const payload = {
      value: `#${text}`,
      color: "#" + (Math.random().toString(16) + "000000").substring(2, 8)
    };
    dispatch(createTags(payload));
    setText("");
    Keyboard.dismiss();
  };
  return (
    <HStack space={5} style={{ alignItems: "center" }}>
      <TextInput
        value={text}
        onChangeText={(text) => setText(text)}
        placeholderTextColor='#fff'
        placeholder={languages.add_tag}
        style={{
          paddingVertical: 10,
          color: "#fff",
          width: "85%",
          borderRadius: 10,
          paddingHorizontal: 10,
          backgroundColor: "#2D3142",
          marginBottom: 30
        }}
      />
      <IconButton
        onPress={pressHandler}
        p={2}
        mb='8'
        variant='solid'
        bg='#138382'
        colorScheme='coolGray'
        borderRadius='full'
        icon={
          <Icon
            as={MaterialCommunityIcons}
            size='5'
            name={"plus"}
            _dark={{
              color: "warmGray.50"
            }}
            color='warmGray.50'
          />
        }
      />
    </HStack>
  );
};
export default CreateTag;
