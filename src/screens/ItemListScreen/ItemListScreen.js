import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import Checkbox from "expo-checkbox";

import { SectionList, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";
import { theme } from "../../core/colors";
import moment from "moment";
import { completedNotes } from "../../redux/reducers/notesReducer";
import { useDispatch } from "react-redux";
require("moment/min/locales.min");
moment.locale("uk");

const Item = ({ item, type, dispatch }) => {
  const onCompleted = () => {
    dispatch(completedNotes(item.item.id));
  };

  return (
    <View>
      <View
        style={[
          styles.card,
          styles.item,
          { backgroundColor: item?.item?.background || theme.card }
        ]}>
        <View
          style={
            type === "Задачі" && {
              flexDirection: "row",
              alignItems: "center"
            }
          }>
          {type === "Задачі" && (
            <Checkbox
              style={styles.checkbox}
              value={item.item.completed}
              onValueChange={onCompleted}
            />
          )}
          <Text style={[styles.text, { fontWeight: "bold" }]}>
            {item.item.heading}
          </Text>
          {item.item?.task && (
            <Text style={styles.text}>{item.item?.task}</Text>
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
          }}>
          {type === "Задачі" && (
            <View style={{ flexDirection: "row" }}>
              {item.item.difficulty && (
                <Text
                  style={{
                    backgroundColor: item.item?.difficulty.selectColor,
                    color: item.item?.difficulty.color,
                    ...styles.tag
                  }}>
                  {item.item?.difficulty.value}
                </Text>
              )}
              {item.item?.priority && (
                <Text
                  style={{
                    backgroundColor: item.item?.priority.selectColor,
                    color: item.item?.priority.color,
                    ...styles.tag
                  }}>
                  {item.item?.priority.value}
                </Text>
              )}
            </View>
          )}
          {item.item.activeTags[0] && (
            <Text
              style={[
                styles.tag,
                { backgroundColor: item.item.activeTags[0]?.color }
              ]}>
              {item.item.activeTags[0]?.value}
            </Text>
          )}

          {moment(item.item?.selectTime).isValid() && (
            <Text
              style={[
                styles.tag,
                {
                  opacity: 0.9,
                  backgroundColor: "#333",
                  alignSelf: "flex-start",
                  fontWeight: "bold",
                  color: theme.secondText
                }
              ]}>
              {moment(item.item?.selectTime).isValid() &&
                moment(item.item?.selectTime).format("HH:mm")}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

const ItemListScreen = () => {
  const dispatch = useDispatch();
  const { items, title } = useRoute().params;
  const [userItems, setUserItems] = useState([]);
  useEffect(() => {
    let data = items?.reduce((acc, curr) => {
      const key = curr["selectDate"];
      const value = acc[key] ? [...acc[key], curr] : [curr];
      acc[key] = value;
      return acc;
    }, {});
    let dat = [];
    for (const key in data) {
      dat.push({ title: key, data: [...data[key]] });
    }

    setUserItems(dat);
  }, [items]);
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={userItems || []}
        keyExtractor={(item, index) => item + index}
        renderItem={(data) => (
          <Item item={data} type={title} dispatch={dispatch} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={[styles.date, styles.text]}>
            {moment(title).isValid() &&
              `${moment(title).format("dddd,").toUpperCase()}${moment(
                title
              ).format(" DD MMM.")}`}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};
export default ItemListScreen;
