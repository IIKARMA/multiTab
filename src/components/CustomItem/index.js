import React, { useState, useEffect } from "react";
import { theme } from "../../core/colors";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Menu, Pressable, Text, Box, Container, VStack } from "native-base";
import { useDispatch } from "react-redux";
import { removeTaskTC, editingTaskTC } from "../../redux/reducers/tasksReducer";
import { completedNotes } from "../../redux/reducers/notesReducer";
import Checkbox from "expo-checkbox";

const CustomItem = ({
  type,
  id,
  task,
  completed,
  heading,
  background,
  activeTags,
  selectDate,
  selectTime,
  navigation,
  languages
}) => {
  const dispatch = useDispatch();
  const [isChecked, setChecked] = useState();
  const onCompleted = () => {
    dispatch(completedNotes(id));
  };

  return (
    <Box key={id}>
      <Menu
        placement='bottom center'
        bg={"#333"}
        color={theme.text}
        // opacity={0.7}
        shadow={5}
        trigger={(triggerProps) => {
          return type === "notes" ? (
            <TouchableOpacity style={styles.section}>
              <Checkbox
                style={styles.checkbox}
                value={completed}
                onValueChange={onCompleted}
              />
              <Text style={styles.text} strikeThrough={completed}>
                {heading}
              </Text>
            </TouchableOpacity>
          ) : (
            <Pressable
              accessibilityLabel='More options menu'
              {...triggerProps}
              key={id}>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32
  },
  section: {
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    color: theme.secondText,
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 1.5
  },
  paragraph: {
    fontSize: 15
  },
  checkbox: { borderRadius: 5, marginRight: 7 }
});
