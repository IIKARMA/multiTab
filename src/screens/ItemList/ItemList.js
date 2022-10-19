import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./style";
import { CustomItem } from "../../components";
const ItemList = ({ navigation, tasks, languages }) => {
  const [listTasks, setListTasks] = useState([]);
  useEffect(() => {
    setListTasks(tasks.tasks);
  }, [tasks]);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("ItemList", { items: tasks })}>
            <Icon
              as={MaterialCommunityIcons}
              size='6'
              name={"file-edit"}
              color='amber.400'
            />
            <Text style={styles.headerText}>{languages.notes}</Text>
            <Icon
              as={MaterialCommunityIcons}
              size='5'
              name='chevron-right-circle'
              color='gray.500'
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("NewTask", {
                isNew: true
              })
            }
            style={styles.addButton}>
            <Text style={styles.addText}>{languages.add}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {listTasks.length
            ? listTasks.reverse().map((value) => (
                <View
                  key={value.id}
                  style={[
                    styles.cardItem,
                    { backgroundColor: value.background }
                  ]}>
                  <CustomItem
                    {...value}
                    navigation={navigation}
                    languages={languages}
                  />
                </View>
              ))
            : null}
        </ScrollView>
      </View>
    </View>
  );
};
export default ItemList;
