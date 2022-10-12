import React, { memo, useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text
} from "react-native";

import { styles } from "./style";
const SelectTag = ({ tags, selectedTags, handleSelectTag, horizontal }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        horizontal={horizontal}
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        {tags?.map((tag, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.listItem,
                !!selectedTags?.find((sTag) => sTag.id === tag.id) && {
                  ...styles.listItem,
                  backgroundColor: tag.color
                }
              ]}
              onPress={() => handleSelectTag(tag)}>
              <Text style={styles.textItem}>
                {tag.value.toString().split("#")}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
export default SelectTag;
