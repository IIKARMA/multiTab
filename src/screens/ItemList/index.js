import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from "react-native";
import { Icon, Box, NativeBaseProvider } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./style";
import { CustomItem } from "../../components";
const ItemList = ({ navigation, tasks }) => {
  console.log(tasks);
  const [listTasks, setListTasks] = useState([]);
  useEffect(() => {
    setListTasks(tasks.tasks);
  }, [tasks]);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Box style={styles.box}>
            <Icon
              as={MaterialCommunityIcons}
              size='6'
              name={"file-edit"}
              _dark={{
                color: "amber.400"
              }}
              color='amber.400'
            />
            <Text style={styles.headerText}>Заметки</Text>
          </Box>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("NewTask", {
                isNew: true
              })
            }
            style={styles.addButton}>
            <Text style={styles.addText}>Добавить</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {listTasks.length
            ? listTasks
                .sort((a, b) => b < a)
                .map((value) => (
                  <View
                    key={value.id}
                    style={[
                      styles.cardItem,
                      { backgroundColor: value.background }
                    ]}>
                    <CustomItem {...value} navigation={navigation} />
                  </View>
                ))
            : null}
        </ScrollView>
      </View>
    </View>
  );
};
export default ItemList;
