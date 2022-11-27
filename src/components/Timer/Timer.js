import React, { useEffect, useState, useRef, createRef } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { timeFormat } from '../../utilits/timeFormat'
import { theme } from '../../core/colors'
import CustomCard from '../CustomCard/CustomCard'
const Timer = ({ duration, play, reloadPomodoro }) => {
  const [showCard, setShowCard] = useState(false)
  const [timer, setTimer] = useState(duration)

  const relodeTimer = () => {
    setTimer(duration)
    reloadPomodoro()
  }
  useEffect(() => {
    setTimer(duration)
  }, [duration])
  const updateTime = () => {
    play && timer !== 0 && setTimer((t) => t - 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      play &&
        setTimer((lastTimerCount) => {
          if (lastTimerCount < 1) {
            clearInterval(interval)
            relodeTimer()
          } else return lastTimerCount - 1
        })
    }, 1000) // each count lasts for a second
    // cleanup the interval on complete
    // timerRef.current <= 1 && relodeTimer();
    return () => clearInterval(interval)
  }, [play])

  // useEffect(() => {
  //   let interval = setTimeout(() => updateTime(), 1000);
  //   if (timer === 0)
  //     return () => {
  //       clearTimeout(interval);
  //       relodeTimer();
  //     };
  // }, [timer, updateTime]);
  return (
    <>
      <Text style={styles.text}>{timeFormat(timer)}</Text>
      {showCard && !play && (
        <CustomCard modal={showCard} closeModal={setShowCard} />
      )}
    </>
  )
}
export default Timer
const styles = StyleSheet.create({
  text: {
    position: 'relative',
    marginLeft: 4,
    fontWeight: 'bold',
    padding: 5,
    fontSize: 42,
    borderBottomColor: theme.secondText,
    color: theme.text
  }
})
