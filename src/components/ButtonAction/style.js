import { StyleSheet } from 'react-native'
import { theme } from '../../core/colors'

export const styles = StyleSheet.create({
  containerButton: {
    paddingVertical: 10,
    paddingHorizontal: 9,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: theme.secondNavigator.replace('0.5', '0.8'),
    width: '35%',
    alignSelf: 'center'
  },
  text: { marginLeft: 5, fontSize: 16, fontWeight: '600' }
})
