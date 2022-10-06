import React, { useRef, forwardRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import {
  Icon,
  IconButton,
  Modal,
  VStack,
  Box,
  useDisclose,
  Center,
  Radio,
  Button,
  Container,
  theme,
  HStack,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
const CustomModal = ({ modal }) => {
  const [modalVisible, setModalVisible] = useState(modal);
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Center>
      <Modal
        p={"2"}
        animationPreset='slide'
        style={{
          borderBottomWidth: 0,
          marginBottom: 0,
          marginTop: "auto",
          backfaceVisibility: "hidden",
        }}
        size='full'
        justifyContent='flex-end'
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}>
        <Modal.Content
          rounded='20'
          background={"#2D3142"}
          maxHeight={`${Dimensions.get("window").height - 150}px`}>
          <Modal.CloseButton
            _icon={{ color: "muted.200" }}
            bg='#2D3142'
            colorScheme='#fff'
          />
          <Modal.Header
            _text={{ color: "text.50", textAlign: "center" }}
            borderBottomWidth='0'
            background='rgba(54,58,75,0.6)'>
            Тэг
          </Modal.Header>
          <Modal.Body
            borderBottom={0}
            background='rgba(54,58,75,0.6)'
            borderColor={"red"}>
            <HStack space={5} style={{ alignItems: "center" }}>
              <TextInput
                defaultValue='Добавить текст'
                style={{
                  paddingVertical: 10,
                  color: "#fff",
                  width: "85%",
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  backgroundColor: "#2D3142",
                  marginBottom: 30,
                }}
              />
              <IconButton
                p={3}
                mb='8'
                variant='solid'
                bg='blueGray.600'
                colorScheme='coolGray'
                borderRadius='full'
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    size='4'
                    name={"plus"}
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color='warmGray.50'
                  />
                }
              />
            </HStack>
            <Radio.Group defaultValue='address1' name='address' size='sm'>
              <VStack space={5} background={"rgba(54,58,75,0)"}>
                <Radio
                  background={"rgba(54,58,75,0)"}
                  alignItems='flex-start'
                  _text={{
                    mt: "-1",
                    ml: "2",
                    fontSize: "sm",
                  }}
                  value='address1'>
                  4140 Parker Rd. Allentown, New Mexico 31134
                </Radio>
                <Radio
                  background={"rgba(54,58,75,0)"}
                  alignItems='flex-start'
                  _text={{
                    mt: "-1",
                    ml: "2",
                    fontSize: "sm",
                  }}
                  value='address2'>
                  6391 Elign St. Celina, Delaware 10299
                </Radio>
              </VStack>
            </Radio.Group>
            <Container
              w={"full"}
              style={{ alignSelf: "center", paddingTop: 35 }}>
              <Button
                w={"full"}
                textAlign='center'
                onPress={() => setModalVisible(false)}
                colorScheme='success'
                _text='Готово'>
                <Text colorScheme='success' style={{ alignSelf: "center" }}>
                  Готово
                </Text>
              </Button>
            </Container>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  );
};
export default CustomModal;
