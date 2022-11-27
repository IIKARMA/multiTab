import ActionSheet, { SheetManager } from 'react-native-actions-sheet'
import { HStack } from 'native-base'
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { BlurView } from 'expo-blur'
import { theme } from '../../core/colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { removeTaskTC, editingTaskTC } from '../../redux/reducers/tasksReducer'
import {
  removeNotesTC,
  completedNotes
} from '../../redux/reducers/notesReducer'
const CustomActionSheet = ({ payload }) => {
  const { item } = payload.item
  const type = payload.type
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const handleEdit = () => {
    navigation.navigate('NewTask', {
      type,
      isNew: false,
      task: item
    })
    SheetManager.hide('sheets')
  }

  const handleDone = () => {
    dispatch(completedNotes(item.id))
    SheetManager.hide('sheets')
  }

  const handleDelete = () => {
    type === 'notes'
      ? dispatch(removeNotesTC(item.id))
      : dispatch(removeTaskTC(item.id))
    SheetManager.hide('sheets')
  }

  const handleCansel = () => {
    SheetManager.hide('sheets')
  }
  const options = useMemo(() => {
    return {
      notes: [
        {
          option: payload.languages?.edit,
          icon: 'pencil-square-o',
          color: theme.secondText,
          func: handleEdit
        },

        {
          option: !item?.completed
            ? payload.languages.done
            : payload.languages.notDone,
          icon: 'check',
          color: theme.secondText,
          func: handleDone
        },
        {
          option: payload.languages?.delete,
          icon: 'trash-o',
          color: '#ba181b',
          func: handleDelete
        }
      ],
      tasks: [
        {
          option: payload.languages?.edit,
          icon: 'pencil-square-o',
          color: theme.secondText,
          func: handleEdit
        },
        {
          option: payload.languages?.delete,
          icon: 'trash-o',
          color: '#ba181b',
          func: handleDelete
        }
      ]
    }
  }, [item, payload])
  return (
    <ActionSheet
      headerAlwaysVisible
      isModal
      animated
      id='sheets'
      containerStyle={styles.container}
      statusBarTranslucent
    >
      <View
        intensity={80}
        tint='dark'
        style={{
				  backgroundColor: theme.background,
				  padding: 20,
				  opacity: 1,
				  flexDirection: 'column',
				  justifyContent: 'space-between',
				  borderTopLeftRadius: 25,
				  borderTopRightRadius: 25
        }}
      >
        {options[payload.type].length
				  ? options[payload.type].map((option, index) => (
  <TouchableOpacity onPress={option.func} key={index}>
    <HStack space={4} alignItems='center' paddingY={2}>
      <Icon name={option.icon} color={option.color} size={25} />
      <Text style={[styles.text, { color: option.color }]}>
        {option.option}
      </Text>
    </HStack>
  </TouchableOpacity>
					  ))
				  : null}
      </View>
    </ActionSheet>
  )
}
export default CustomActionSheet
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background,
    borderTopLeftRadius: 25,
    opacity: 1,
    borderTopRightRadius: 25
  },
  text: { fontSize: 24, color: theme.secondText }
})
