import React, { memo, useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { backgroundColor } from "styled-system";
import { setTags } from "../../redux/reducers/directoryReducer";
import { styles } from "./style";
const SelectTag = ({ tags, selectedTags, handleSelectTag }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {tags.map((tag, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.listItem,
                !!selectedTags.find((sTag) => sTag.id === tag.id) && {
                  ...styles.listItem,
                  backgroundColor: tag.color,
                },
              ]}
              onPress={() => handleSelectTag(tag)}>
              <Text style={styles.textItem}>{tag.value}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
export default SelectTag;
