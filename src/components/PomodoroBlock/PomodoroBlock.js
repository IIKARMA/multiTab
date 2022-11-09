import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./style";
import Timer from "../Timer/Timer";
import CustomModal from "../CustomModal";
import CustomCard from "../CustomCard/CustomCard";
const PomodoroBlock = ({ languages }) => {
  const [play, setPlay] = useState(false);
  const [duration, setDuration] = useState(12);

  const startPomodoro = () => {
    setPlay(!play);
    setDuration(12);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.box}>
          <Icon
            as={MaterialCommunityIcons}
            size='6'
            name='timer'
            color='#582630'
          />
          <Text style={styles.text}>{languages.pomodoro}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            as={MaterialCommunityIcons}
            size='6'
            name='chevron-right'
            color='#582630'
          />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Timer duration={duration} play={play} startPomodoro={startPomodoro} />
        <TouchableOpacity onPress={startPomodoro} style={styles.buttonPlay}>
          <Icon
            as={MaterialCommunityIcons}
            size='10'
            name={!play ? "play" : "pause"}
            color='#A54657'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PomodoroBlock;
