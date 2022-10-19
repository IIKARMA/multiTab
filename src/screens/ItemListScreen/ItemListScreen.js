import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  SectionList,
  ScrollView,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";
import moment from "moment";
import { keyframes } from "styled-components";
import object from "react-native-ui-lib/src/style/colorName";
import { typeOf } from "react-is";
require("moment/min/locales.min");
moment.locale("uk");

const Item = ({ item }) => {
  console.log("====================================");
  console.log(item);
  console.log("====================================");
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.card,
          styles.item,
          { backgroundColor: item.item?.background }
        ]}>
        <View>
          <Text style={[styles.text, { fontWeight: "bold" }]}>
            {item.item.heading}
          </Text>
          <Text style={styles.text}>{item.item.task}</Text>
        </View>
        <Text
          style={[
            styles.tag,
            { backgroundColor: item.item.activeTags[0]?.color }
          ]}>
          {item.item.activeTags[0]?.value}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const ItemListScreen = () => {
  const { items } = useRoute().params;
  const [userItems, setUserItems] = useState([]);
  useEffect(() => {
    let data = items.tasks.reduce((acc, curr) => {
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
        renderItem={(data) => <Item item={data} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={[styles.date, styles.text]}>
            {moment(title).format("llll") &&
              moment(title).isValid() &&
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
