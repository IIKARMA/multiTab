import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon, Modal } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../core/colors";

const CustomPriority = ({
  type,
  difficulty,
  languages,
  selectDifficulty,
  setSelectDifficulty,
  priority,
  selectPriority,
  setSelectPriority
}) => {
  const [items, setItems] = useState(difficulty || priority);
  const [selectItems, setSelectItems] = useState(
    selectPriority || selectDifficulty
  );
  useEffect(() => {
    setSelectItems(selectPriority || selectDifficulty);
  }, [selectPriority, selectDifficulty]);
  return (
    <>
      <Modal.Header
        _text={{
          color: "text.50",
          textAlign: "center",
          fontSize: "lg"
        }}
        borderBottomWidth='0'
        background='rgba(54,58,75,0.6)'>
        {type === "flag" ? languages.priority : languages.difficulty}
      </Modal.Header>
      <Modal.Body
        // h='14'
        borderBottom={0}
        background='rgba(54,58,75,0.6)'>
        {items.map((prior) => (
          <TouchableOpacity
            onPress={() =>
              type === "flag"
                ? setSelectPriority({ ...prior })
                : setSelectDifficulty({ ...prior })
            }
            key={prior.id}
            style={{
              ...styles.priority,
              backgroundColor:
                selectItems && selectItems.id === prior.id
                  ? selectItems.selectColor
                  : "rgba(54,58,75,0)"
            }}>
            <Icon
              size='5'
              name={type}
              color={prior.color}
              as={MaterialCommunityIcons}
            />
            <Text style={[styles.text, { color: prior.color }]}>
              {prior.value}
            </Text>
          </TouchableOpacity>
        ))}
      </Modal.Body>
    </>
  );
};
export default CustomPriority;
const styles = StyleSheet.create({
  text: { fontSize: 24, marginLeft: 5 },
  priority: {
    marginBottom: 8,
    paddingHorizontal: 5,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  }
});
