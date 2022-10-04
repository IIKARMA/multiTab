import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { theme } from "../../core/colors";
import { styles } from "./style";
const SearchPanel = () => {
  const [showCross, setShowCross] = useState(false);
  const [value, setValue] = useState("");
  return (
    <View style={styles.searchBox}>
      <Image
        style={styles.searchIcon}
        source={require("../../icons/search.png")}
      />
      <TextInput
        placeholderTextColor={theme.text}
        placeholder="Seacrh"
        onChangeText={(text) => setValue(text)}
        value={value}
        style={styles.searchInput}
        onPressIn={() => setShowCross(true)}
      />
      {showCross && (
        <TouchableOpacity
          onPress={() => {
            setValue("");
            setShowCross(false);
          }}>
          <Image
            style={{ ...styles.searchIcon, opacity: 0.6 }}
            source={require("../../icons/сross.png")}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default SearchPanel;
