import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Icon } from "native-base";
import { styles } from "./style";
const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon
          as={MaterialCommunityIcons}
          size='6'
          name='menu'
          color='warmGray.50'
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon
          as={MaterialCommunityIcons}
          size='6'
          name='dots-horizontal-circle-outline'
          color='warmGray.50'
        />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
