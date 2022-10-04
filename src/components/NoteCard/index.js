import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../../core/colors";
import { styles } from "./style";
import { BlurView } from "expo-blur";
import ProgressBarAnimated from "react-native-progress-bar-animated";
const NoteCard = ({ task }) => {
  console.log("task", task);

  return (
    <View style={styles.card}>
      {/* <View
        style={{
          width: 10,
          height: "80%",
          backgroundColor: "#B6A6FF",
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}></View> */}

      <Image
        style={[StyleSheet.absoluteFill, styles.image]}
        source={require("../../icons/mask.png")}
      />
      <BlurView
        intensity={10}
        style={{
          borderRadius: 10,
          flex: 1,
          flexDirection: "row",
        }}>
        <View style={styles.infoCard}>
          <Text style={{ color: theme.text }}>{task.heading}</Text>
          <Text style={{ color: theme.text }}>{task.task}</Text>
        </View>
      </BlurView>
    </View>
  );
};
export default NoteCard;
