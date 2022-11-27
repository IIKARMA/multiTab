import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Checkbox from 'expo-checkbox'
import { completedNotes } from '../../redux/reducers/notesReducer'
import { useDispatch } from 'react-redux'
import { theme } from '../../core/colors'

const NotesItem = ({ item, showAction }) => {
  return (
    <TouchableOpacity
      key={item.item.id}
      style={[
			  styles.container,
			  {
			    backgroundColor: item.item.background
			      ? item.item.background
			      : theme.item
        }
      ]}
      onPress={showAction}
    >
      <View style={styles.itemStyle}>
        <Text style={styles.text}>{item.item.heading}</Text>
        <Text
          style={[styles.text, { margin: 4, fontSize: 14, fontWeight: '500' }]}
        >
          {item.item.task}
        </Text>
      </View>
      <View
        style={[
				  styles.tagContainer,
				  {
				    backgroundColor: item.item.activeTags[0]?.color
          }
        ]}
      >
        <Text style={[styles.tag]}>{item.item.activeTags[0]?.value}</Text>
      </View>
    </TouchableOpacity>
  )
}
export default NotesItem
const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginRight: 10,
    width: 140,
    borderRadius: 10,
    height: 120
  },
  tagContainer: {
    position: 'absolute',
    bottom: 15,
    right: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 4
  },
  tag: {
    fontWeight: '800',
    color: theme.background
  },
  text: {
    marginLeft: 5,
    textAlign: 'left',
    color: theme.secondText,
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 1.5
  },
  itemStyle: { flexDirection: 'column', padding: 10, position: 'relative' }
})
