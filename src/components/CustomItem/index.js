import React, { useState } from "react";
import { theme } from "../../core/colors";
import {
  Menu,
  Pressable,
  Text,
  Box,
  Container,
  VStack,
  Checkbox
} from "native-base";
import { StyleSheet, Vibration } from "react-native";
import { useDispatch } from "react-redux";
import { removeTaskTC, editingTaskTC } from "../../redux/reducers/tasksReducer";
import moment from "moment";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomItem = ({
  type,
  id,
  task,
  heading,
  background,
  activeTags,
  selectDate,
  selectTime,
  navigation,
  languages
}) => {
  const dispatch = useDispatch();
  return (
    <Box key={id}>
      <Menu
        placement='bottom center'
        bg={"blueGray.500"}
        color={theme.text}
        opacity={0.7}
        shadow={5}
        trigger={(triggerProps) => {
          return type === "notes" ? (
            <Pressable accessibilityLabel='More options menu' {...triggerProps}>
              <VStack
                zIndex={2}
                padding={2}
                height='100%'
                width='90%'
                maxW='400'
                space={2}
                overflow='hidden'>
                <Text
                  style={{
                    color: theme.text,
                    fontWeight: "800"
                  }}>
                  {heading}
                </Text>
                <Text
                  style={{
                    paddingRight: 10,
                    color: theme.secondText,
                    fontWeight: "400"
                  }}>
                  {task}
                </Text>
              </VStack>
            </Pressable>
          ) : (
            <Checkbox value='Email' key={id} my='1'>
              <Text strikeThrough> {task}</Text>
            </Checkbox>
          );
        }}>
        <Menu.Item
          opacity={1}
          color={theme.secondText}
          onPress={() =>
            navigation.navigate("NewTask", {
              type: type,
              isNew: false,
              task: {
                id,
                task,
                heading,
                background,
                activeTags,
                selectDate,
                selectTime
              }
            })
          }>
          <Text color={theme.text}>{languages.edit}</Text>
        </Menu.Item>
        {/* <Menu.Item onPress={() => setVisibleModalTC(true)}>
          <Text color={theme.text}>Изменить цвет</Text>
        </Menu.Item> */}
        <Menu.Item onPress={() => dispatch(removeTaskTC(id))}>
          <Text color={theme.text}>{languages.delete}</Text>
        </Menu.Item>
      </Menu>
    </Box>
  );
};
export default CustomItem;
