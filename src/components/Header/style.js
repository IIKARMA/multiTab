import { StyleSheet } from 'react-native'
import { theme } from '../../core/colors'
export const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 30
  },
  borderLeft: {
    borderLeftWidth: 0,
    borderLeftColor: theme.card
  },
  dateContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.card,
    padding: 8,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  text: { fontWeight: 'normal', color: theme.text, fontSize: 18 }
})
