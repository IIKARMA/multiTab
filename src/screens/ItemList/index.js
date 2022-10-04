import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Icon, IconButton, Box, NativeBaseProvider } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { theme } from "../../core/colors";
const ItemList = ({ navigation, tasks }) => {
  const [listTasks, setListTasks] = useState([]);
  useEffect(() => {
    setListTasks(tasks);
  }, [tasks]);
  return (
    <View
      style={{
        alignSelf: "center",
        backgroundColor: theme.card,
        borderRadius: 20,
        padding: 10,
        overflow: "hidden",
        width: "90%",
      }}>
      <View
        style={{
          paddingHorizontal: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <View style={{}}>
          <NativeBaseProvider>
            <Box
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}>
              <Icon
                as={MaterialCommunityIcons}
                size='6'
                name={"file-edit"}
                _dark={{
                  color: "amber.400",
                }}
                color='amber.400'
              />

              <Text
                style={{
                  fontWeight: "bold",
                  padding: 5,
                  fontSize: 18,
                  borderBottomColor: theme.secondText,
                  color: theme.text,
                }}>
                Заметки
              </Text>
            </Box>
          </NativeBaseProvider>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NewTask")}
          style={{ backgroundColor: theme.background, borderRadius: 10 }}>
          <Text
            style={{
              padding: 8,
              fontSize: 12,
              borderBottomColor: theme.secondText,
              color: theme.text,
            }}>
            Добавить
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {listTasks.tasks?.map((tasks, index) => (
          <View
            style={{
              marginTop: 10,
              borderColor: theme.item,
              borderWidth: 2,
              borderRadius: 10,
              marginLeft: 5,
              height: 140,
              width: 160,
              padding: 10,
            }}>
            <Text
              style={{
                color: theme.text,
                fontSize: 18,
                paddingBottom: 20,
                fontWeight: "600",
              }}>
              {tasks.heading}
            </Text>
            <Text
              style={{ color: theme.text, fontSize: 16, fontWeight: "500" }}>
              {tasks.task}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default ItemList;
