import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Icon, Box, NativeBaseProvider } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./style";
const ItemList = ({ navigation, tasks }) => {
  const [listTasks, setListTasks] = useState([]);
  useEffect(() => {
    setListTasks(tasks);
  }, [tasks]);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <NativeBaseProvider>
          <Box style={styles.box}>
            <Icon
              as={MaterialCommunityIcons}
              size='6'
              name={"file-edit"}
              _dark={{
                color: "amber.400",
              }}
              color='amber.400'
            />
            <Text style={styles.headerText}>Заметки</Text>
          </Box>
        </NativeBaseProvider>
        <TouchableOpacity
          onPress={() => navigation.navigate("NewTask")}
          style={styles.addButton}>
          <Text style={styles.addText}>Добавить</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {listTasks.tasks?.map((tasks) => (
          <View style={styles.cardItem} key={tasks.id}>
            <Text style={styles.nameItem}>{tasks.heading}</Text>
            <Text style={styles.textItem}>{tasks.task}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default ItemList;
