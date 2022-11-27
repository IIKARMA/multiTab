import { StyleSheet } from 'react-native'
import { theme } from '../../core/colors'
export const styles = StyleSheet.create({
  container: { marginBottom: 45 },

  listItem: {
    marginVertical: 5,
    backgroundColor: theme.background,
    borderRadius: 10
  },
  textItem: {
    fontWeight: '800',
    textAlign: 'center',
    color: theme.text,
    padding: 7
  }
})
