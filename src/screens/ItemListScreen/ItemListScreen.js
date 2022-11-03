import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  SectionList,
  Icon,
  View,
  TouchableOpacity,
  Text,
  Box,
  ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";
import { theme } from "../../core/colors";
import moment from "moment";
require("moment/min/locales.min");
moment.locale("uk");

const Item = ({ item }) => {
  return (
    <View>
      <View
        style={[
          styles.card,
          styles.item,
          { backgroundColor: item?.item?.background }
        ]}>
        <View>
          <Text style={[styles.text, { fontWeight: "bold" }]}>
            {item.item.heading}
          </Text>
          <Text style={styles.text}>{item.item?.task}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
          }}>
          <Text
            style={[
              styles.tag,
              { backgroundColor: item.item.activeTags[0]?.color }
            ]}>
            {item.item.activeTags[0]?.value}
          </Text>
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
  const { items } = useRoute().params;
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
        renderItem={(data) => <Item item={data} />}
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
