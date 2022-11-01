import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./style";
import { CustomItem } from "../../components";
const ItemList = ({ navigation, items, languages, type }) => {
  const [listTasks, setListTasks] = useState([]);
  useEffect(() => {
    setListTasks(items);
  }, [items]);
  console.table(items);
  return (
    <View style={styles.container} key={items.id}>
      <View>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("ItemList", { items: items })}>
            <Icon
              as={MaterialCommunityIcons}
              size='6'
              name={type === "notes" ? "format-list-checks" : "file-edit"}
              color={type === "notes" ? "#e63946" : "amber.400"}
            />
            <Text style={styles.headerText}>
              {type === "notes" ? languages.tasks : languages.notes}
            </Text>
            {type === "notes" && (
              <View style={styles.completedCount}>
                <Text style={[styles.textItem, { fontSize: 14 }]}>
                  {listTasks.filter((item) => item.completed).length}/
                  {listTasks.length}
                </Text>
              </View>
            )}
          </TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
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
            <TouchableOpacity
              onPress={() => navigation.navigate("ItemList", { items: items })}>
              <Icon
                as={MaterialCommunityIcons}
                size='6'
                name='chevron-right'
                color='gray.500'
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          style={{ maxHeight: 150 }}
          horizontal={type === "tasks" && true}
          showsHorizontalScrollIndicator={false}>
          {listTasks?.length > 0
            ? listTasks
                ?.sort((a, b) => a - b)
                .map((value) => (
                  <View
                    key={value.id}
                    style={[
                      type === "notes" ? styles.check : styles.cardItem,
                      { backgroundColor: type === "tasks" && value.background }
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
