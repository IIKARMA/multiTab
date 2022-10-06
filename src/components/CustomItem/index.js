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
} from "native-base";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { removeTaskTC, editingTaskTC } from "../../redux/reducers/tasksReducer";
const CustomItem = ({ id, heading, task, navigation }) => {
  const dispatch = useDispatch();
  return (
    <Box key={id}>
      <Menu
        placement='bottom center'
        bg='blueGray.600'
        _backdrop={{ bg: "rgba(54,58,75,0)" }}
        color={theme.text}
        shadow={5}
        trigger={(triggerProps) => {
          return (
            <Pressable accessibilityLabel='More options menu' {...triggerProps}>
              <VStack
                padding={2}
                height='100%'
                width='90%'
                maxW='400'
                space={2}
                overflow='hidden'>
                <Text
                  style={{
                    color: theme.text,
                    fontWeight: "800",
                  }}>
                  {heading}
                </Text>
                <Text
                  style={{
                    paddingRight: 10,
                    color: theme.secondText,
                    fontWeight: "400",
                  }}>
                  {task}
                </Text>
              </VStack>
            </Pressable>
          );
        }}>
        <Menu.Item
          color={theme.secondText}
          onPress={() =>
            navigation.navigate("NewTask", {
              screen: "NewTask",
              title: "Редактировать",
              isNew: false,
              task: { task, heading, id },
            })
          }>
          <Text color={theme.text}>Редактировать</Text>
        </Menu.Item>
        <Menu.Item>
          <Text color={theme.text}>Изменить цвет</Text>
        </Menu.Item>
        <Menu.Item onPress={() => dispatch(removeTaskTC(id))}>
          <Text color={theme.text}>Удалить</Text>
        </Menu.Item>
      </Menu>
    </Box>
  );
};
export default CustomItem;
