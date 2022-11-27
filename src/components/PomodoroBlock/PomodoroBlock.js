import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import * as Native from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from './style'
import Timer from '../Timer/Timer'
import Icon from 'react-native-vector-icons/FontAwesome'

import { theme } from 'native-base'

const PomodoroBlock = ({ languages }) => {
  const [play, setPlay] = useState(false)
  const [duration, setDuration] = useState(600)

  const reloadPomodoro = () => {
    setPlay(!play)
  }

  const menuDuration = [
    {
      text: '5 хвилин',
      icon: () => <Icon name='clock-o' c size={20} />,
      onPress: () => {
        setDuration(300)
      }
    },
    {
      text: '10 хвилин ',
      icon: () => <Icon name='clock-o' color='#FFF' size={20} />,
      onPress: () => {
        setDuration(600)
      }
    },
    {
      text: '15 хвилин ',
      icon: () => <Icon name='clock-o' color='#495057' size={20} />,
      onPress: () => {
        setDuration(900)
      }
    },
    {
      text: '20 хвилин ',
      icon: () => <Icon name='clock-o' color='#495057' size={20} />,
      onPress: () => {
        setDuration(1200)
      }
    }
  ]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.box}>
          <Native.Icon
            as={MaterialCommunityIcons}
            size='6'
            name='timer'
            color='#582630'
          />
          <Text style={styles.text}>{languages.pomodoro}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Native.Icon
            as={MaterialCommunityIcons}
            size='6'
            name='chevron-right'
            color='#582630'
          />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <TouchableOpacity
          closeOnTap
          items={menuDuration}
          containerStyles={{
					  position: 'relative',
					  maxWidth: '80%'
          }}
        >
          <Timer
            duration={duration}
            play={play}
            reloadPomodoro={reloadPomodoro}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={reloadPomodoro} style={styles.buttonPlay}>
          <Native.Icon
            as={MaterialCommunityIcons}
            size='10'
            name={!play ? 'play' : 'pause'}
            color='#A54657'
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default PomodoroBlock
