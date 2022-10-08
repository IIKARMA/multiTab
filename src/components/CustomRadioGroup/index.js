import React, { useState, useEffect } from "react";
import { FlatList, Text, View, SafeAreaView } from "react-native";
import { VStack, Radio, ScrollView, HStack } from "native-base";

const CustomRadioGroup = ({ tags }) => {
  const [selectValue, setSelectedValue] = useState("");
  const [allTags, setAllTags] = useState([]);
  const [listItems, setListItems] = useState([]);
  useEffect(() => {
    setAllTags(tags);
  }, [tags]);

  useEffect(() => {
    setListItems(
      <VStack space={5}>
        {tags.map((tag) => (
          <Radio
            w='full'
            colorScheme={tag.color}
            accessibilityLabel='s'
            color={"teal.400"}
            alignItems='flex-start'
            _text={{ mt: "-1", ml: "2", fontSize: "sm", color: "text.200" }}
            value={tag.value}>
            {tag.value}
          </Radio>
        ))}
      </VStack>
    );
  }, [tags, selectValue]);

  return (
    <Radio.Group
      name='tag'
      defaultValue={selectValue}
      size='sm'
      onChange={(value) => setSelectedValue(value)}>
      <ScrollView>{listItems}</ScrollView>
    </Radio.Group>
  );
};
export default CustomRadioGroup;
