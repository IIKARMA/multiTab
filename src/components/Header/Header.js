import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Icon, theme } from "native-base";
import { styles } from "./style";
import moment from "moment";
require("moment/min/locales.min");
moment.locale("uk");

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <View style={styles.dateContainer}>
        <Icon
          as={MaterialCommunityIcons}
          size='6'
          name='calendar'
          color='coolGray.50'
        />
        <Text style={[styles.text, styles.borderLeft]}>
          {moment().format(" dddd,")}
        </Text>
        <Text style={[styles.text]}>{moment().format(" DD MMMM")}</Text>
      </View>
      {/* <TouchableOpacity onPress={() => navigation.openDrawer()}>
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
      </TouchableOpacity> */}
    </View>
  );
};
export default Header;
