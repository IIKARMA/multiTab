import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomPriority = ({ priority, selectPriority, setSelectPriority }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(
      priority.map((prior) => (
        <TouchableOpacity
          onPress={() => setSelectPriority({ ...prior })}
          key={prior.id}
          style={{
            marginBottom: 5,
            paddingHorizontal: 5,
            borderRadius: 10,
            backgroundColor:
              selectPriority && selectPriority.id === prior.id
                ? selectPriority.selectColor
                : "",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center"
          }}>
          <Icon
            size='5'
            name='flag'
            color={prior.color}
            as={MaterialCommunityIcons}
          />
          <Text style={{ fontSize: 18, color: prior.color, marginLeft: 5 }}>
            {prior.value}
          </Text>
        </TouchableOpacity>
      ))
    );
  }, [selectPriority.id]);

  return <View style={{ padding: 10, paddingTop: 45 }}>{items}</View>;
};
export default CustomPriority;
