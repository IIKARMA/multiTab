import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Icon, Checkbox } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./style";
import { CustomItem } from "../../components";
const ItemList = ({ navigation, items, languages, type }) => {
  const [listTasks, setListTasks] = useState([]);
  useEffect(() => {
    setListTasks(items);
  }, [items]);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("ItemList", { items: items })}>
            <Icon
              as={MaterialCommunityIcons}
              size='6'
              name={type === "notes" ? "file-edit" : "clipboard-check"}
              color={type === "notes" ? "amber.400" : "teal.600"}
            />
            <Text style={styles.headerText}>
              {type === "notes" ? languages.notes : languages.tasks}
            </Text>
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
                isNew: true,
                type: type
              })
            }
            style={styles.addButton}>
            <Text style={styles.addText}>{languages.add}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={type === "notes" && true}
          showsHorizontalScrollIndicator={false}>
          {listTasks?.length > 0
            ? listTasks.reverse().map((value) => (
                <View
                  key={value.id}
                  style={[
                    type === "notes" ? styles.cardItem : styles.check,
                    { backgroundColor: type === "notes" && value.background }
                  ]}>
                  <CustomItem
                    {...value}
                    type={type}
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
