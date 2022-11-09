import React, { useEffect, useState, useMemo, useCallback } from "react";
import { View, Text } from "react-native";
import { useCountdown } from "react-native-countdown-circle-timer";
import { timeFormat } from "../../utilits/timeFormat";
import { theme } from "../../core/colors";
import CustomModal from "../CustomModal";
import CustomCard from "../CustomCard/CustomCard";
const Timer = ({ duration, play, startPomodoro }) => {
  const [showCard, setShowCard] = useState(false);
  const [timer, setTimer] = useState(duration);

  const relodeTimer = () => {
    setShowCard(true);
    startPomodoro();
    setTimer(duration);
  };
  const startTimer = () => {
    play && setTimer((t) => t - 1);
  };

  useEffect(() => {
    const time = setTimeout(() => {
      startTimer();
    }, 1000);

    if (timer === 0) {
      clearTimeout(time);
      relodeTimer();
    }
  }, [startTimer, timer]);
  return (
    <>
      <Text
        style={{
          marginLeft: 4,
          fontWeight: "bold",
          padding: 5,
          fontSize: 42,
          borderBottomColor: theme.secondText,
          color: theme.text
        }}>
        {timeFormat(timer)}
      </Text>
      {showCard && <CustomCard modal={showCard} closeModal={setShowCard} />}
    </>
  );
};
export default Timer;
