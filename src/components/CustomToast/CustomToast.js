import { ToastAndroid } from 'react-native'

const CustomToast = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50)
    return null
  }
  return null
}
export default CustomToast
