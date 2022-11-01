import React, { Component } from "react";
import { View, Text } from "react-native";
import { useCountdown } from "react-native-countdown-circle-timer";
import { timeFormat } from "../../utilits/timeFormat";
import { theme } from "../../core/colors";
const Timer = ({ play }) => {
  const { remainingTime } = useCountdown({
    isPlaying: play,
    duration: 1200,
    colors: "#abc"
  });
  return (
    <Text
      style={{
        marginLeft: 4,
        fontWeight: "bold",
        padding: 5,
        fontSize: 42,
        borderBottomColor: theme.secondText,
        color: theme.text
      }}>
      {timeFormat(remainingTime)}
    </Text>
  );
};
export default Timer;
