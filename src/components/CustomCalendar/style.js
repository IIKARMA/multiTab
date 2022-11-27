import { StyleSheet } from 'react-native'
import { borderWidth } from 'styled-system'
import { theme } from '../../core/colors'
export const styles = StyleSheet.create({
  borderLeftButton: { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
  borderRightButton: { borderTopRightRadius: 0, borderBottomRightRadius: 0 },

  button: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: theme.completed,
    borderWidth: 1,
    borderTopWidth: 0
  },
  footerCalendar: {
    alignSelf: 'center',
    width: '97%',
    // height: 30,
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 10,
    marginBottom: 20,
    borderBottomRightRadius: 10
  },
  textButton: {
    color: theme.secondText
  },
  text: {
    color: theme.secondText,
    fontWeight: '700'
  },
  calendar: {
    dayTextColor: '#2d4150',
    todayBackgroundColor: '#333',
    dotColor: '#3f8efc',
    dayTextColor: '#FFF',
    monthTextColor: '#FFF',
    textDisabledColor: 'rgba(54,58,75,0)',

    'stylesheet.calendar.header': {
      week: {
        padding: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: '#333',
        dayTextColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }
    },
    'stylesheet.calendar.main': {
      dayContainer: {
        alignItems: 'center',
        flex: 0.2,
        padding: 0,
        backgroundColor: 'rgba(54,58,75,0.9)'
      },
      emptyDayContainer: {
        flex: 0.2
      },
      week: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: 0,
        marginBottom: 0,
        flexDirection: 'row'
      }
    }
  }
})
