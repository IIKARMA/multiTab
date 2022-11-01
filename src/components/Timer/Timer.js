import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useCountdown } from "react-native-countdown-circle-timer";
import { timeFormat } from "../../utilits/timeFormat";
import { theme } from "../../core/colors";
const Timer = ({ duration, play, startPomodoro }) => {
  const { remainingTime } = useCountdown({
    onComplete: () => {
      return {
        shouldRepeat: true,
        delay: 1.5,
        newInitialRemainingTime: 1200
      };
    },

    isPlaying: play,
    duration: duration,
    colors: "#abc"
  });
  useEffect(() => {
    remainingTime === 1200 && startPomodoro();
  }, [remainingTime]);
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
