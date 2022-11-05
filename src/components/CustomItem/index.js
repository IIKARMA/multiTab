import React, { useState, useEffect } from "react";
import { theme } from "../../core/colors";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  Menu,
  Pressable,
  Text,
  Box,
  Container,
  VStack,
  Icon
} from "native-base";
import { useDispatch } from "react-redux";
import { removeTaskTC, editingTaskTC } from "../../redux/reducers/tasksReducer";
import {
  removeNotesTC,
  completedNotes
} from "../../redux/reducers/notesReducer";
import Checkbox from "expo-checkbox";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomItem = ({
  type,
  id,
  task,
  completed,
  heading,
  background,
  difficulty,
  activeTags,
  selectDate,
  priority,
  selectTime,
  navigation,
  languages
}) => {
  const dispatch = useDispatch();
  const onCompleted = () => {
    dispatch(completedNotes(id));
  };

  return (
    <Box key={id}>
      <Menu
        placement='bottom center'
        bg={"#343434"}
        borderColor={"coolGray.500"}
        borderWidth={1}
        color={theme.text}
        // opacity={0.7}
        shadow='7'
        trigger={(triggerProps) => {
          return type === "notes" ? (
            <Pressable
              shadow={"5"}
              accessibilityLabel='More options menu'
              {...triggerProps}
              key={id}>
              <View style={styles.section}>
                <View style={{ flexDirection: "row" }}>
                  <Checkbox
                    style={styles.checkbox}
                    value={completed}
                    onValueChange={onCompleted}
                  />
                  <Text style={styles.text} strikeThrough={completed}>
                    {heading}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  {priority.value && (
                    <Text
                      style={[
                        styles.priorityText,
                        {
                          color: priority && priority.color,
                          backgroundColor: priority && priority.selectColor
                        }
                      ]}>
                      {priority.value}
                    </Text>
                  )}
                  {difficulty.value && (
                    <Text
                      style={[
                        styles.priorityText,
                        {
                          color: difficulty && difficulty.color,
                          backgroundColor: difficulty && difficulty.selectColor
                        }
                      ]}>
                      {difficulty.value}
                    </Text>
                  )}
                </View>
              </View>
            </Pressable>
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
          style={{ flexDirection: "row" }}
          opacity={1}
          color={theme.secondText}
          onPress={() =>
            navigation.navigate("NewTask", {
              type: type,
              isNew: false,
              task: {
                id,
                task,
                difficulty,
                heading,
                background,
                activeTags,
                priority,
                selectDate,
                selectTime
              }
            })
          }>
          <Icon as={MaterialCommunityIcons} name='pencil' size={"5"} mr='1' />
          <Text color={theme.text}>{languages.edit}</Text>
        </Menu.Item>
        {type === "notes" && (
          <Menu.Item onPress={onCompleted} style={{ flexDirection: "row" }}>
            <Icon as={MaterialCommunityIcons} name='check' size={"5"} mr='1' />
            <Text color={theme.text}>
              {!completed ? "Виконати" : "Не виконано"}
            </Text>
          </Menu.Item>
        )}
        <Menu.Item
          style={{ flexDirection: "row" }}
          onPress={() =>
            type === "tasks"
              ? dispatch(removeTaskTC(id))
              : dispatch(removeNotesTC(id))
          }>
          <Icon
            as={MaterialCommunityIcons}
            name='delete'
            size={"5"}
            color='danger.500'
            mr='1'
          />
          <Text color='danger.500'>{languages.delete}</Text>
        </Menu.Item>
      </Menu>
    </Box>
  );
};
export default CustomItem;
const styles = StyleSheet.create({
  priorityText: {
    overflow: "hidden",
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 5,
    textAlign: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 12
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32
  },
  section: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  text: {
    maxWidth: "100%",
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
