import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import { Modal, Icon } from 'native-base'
import { styles } from './style'
const CustomCard = ({ modal, closeModal }) => {
  return (
    <Modal
      backdropVisible
      overlayVisible
      p='12'
      animationPreset='slide'
      style={styles.modal}
      size='md'
      shadow='9'
      justifyContent='center'
      isOpen={modal}
      onClose={() => closeModal(false)}
    >
      <Modal.CloseButton
        _icon={{ color: 'muted.200' }}
        bg='#2D3142'
        colorScheme='#fff'
      />
      <Modal.Content
        rounded='20'
        background='#582630'
        maxHeight={`${Dimensions.get('window').height - 180}px`}
      >
        <Modal.Body
          style={{ padding: 5 }}
          borderBottom={0}
          background='#A54657'
        >
          <Image
            source={require('../../icons/tomato.png')}
            style={styles.image}
          />
          <Text style={styles.text}> Час вийшов !</Text>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  )
}
export default CustomCard
