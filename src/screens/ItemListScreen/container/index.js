import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native'
import ItemListScreen from '../ItemListScreen'
import { LogBox } from 'react-native'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state'
])
const mapStateToProps = ({ tasks, app, notes }) => ({
  task: tasks,
  notes,
  languages: app.languages
})

export default connect(
  mapStateToProps,
  {}
)(({ task, notes, languages }) => {
  const navigation = useNavigation()
  const { items, title } = useRoute().params

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      return unsubscribe
    })
  }, [])
  //   console.table(items);
  //   console.table(notes.notes);
  return (
    <ItemListScreen
      title={title}
      items={title === 'Нотатки' ? task.tasks : notes.notes}
      languages={languages}
    />
  )
})
