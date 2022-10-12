import React from "react";
import { theme } from "../../core/colors";
import {
  Button,
  Menu,
  NativeBaseProvider,
  Pressable,
  useTheme,
  HeaderText,
  Text,
  Box,
  Container,
  VStack,
  HStack,
  View
} from "native-base";
import { StyleSheet, Vibration } from "react-native";
import { useDispatch } from "react-redux";
import { removeTaskTC, editingTaskTC } from "../../redux/reducers/tasksReducer";
import { setVisibleModalTC } from "../../redux/reducers/directoryReducer";
const CustomItem = ({
  id,
  task,
  heading,
  background,
  activeTags,
  selectDate,
  navigation
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
          return (
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
          );
        }}>
        <Menu.Item
          opacity={1}
          color={theme.secondText}
          onPress={() =>
            navigation.navigate("NewTask", {
              screen: "NewTask",
              isNew: false,
              task: { id, task, heading, background, activeTags, selectDate }
            })
          }>
          <Text color={theme.text}>Редактировать</Text>
        </Menu.Item>
        {/* <Menu.Item onPress={() => setVisibleModalTC(true)}>
          <Text color={theme.text}>Изменить цвет</Text>
        </Menu.Item> */}
        <Menu.Item onPress={() => dispatch(removeTaskTC(id))}>
          <Text color={theme.text}>Удалить</Text>
        </Menu.Item>
      </Menu>
    </Box>
  );
};
export default CustomItem;
