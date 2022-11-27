import { View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Icon, Text } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from './style'
const ButtonAction = ({ handleButton }) => {
  return (
    <TouchableOpacity style={styles.containerButton} onPress={handleButton}>
      <Icon
        as={MaterialCommunityIcons}
        size='6'
        name='plus-circle'
        color='darkBlue.400'
      />
      <Text color='darkBlue.400' style={styles.text}>
        Редагувати
      </Text>
    </TouchableOpacity>
  )
}
export default ButtonAction
