import React from "react";
import {
  Box,
  useDisclose,
  IconButton,
  Stagger,
  HStack,
  Text,
  Icon,
  Center,
  VStack
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
const MenuNavigator = () => {
  const languages = useSelector(({ app }) => app.languages);

  const navigation = useNavigation();
  const { isOpen, onToggle, onClose } = useDisclose();
  const onNavigate = (root, type) => {
    navigation.navigate(root, { type: type, isNew: true });
  };
  return (
    <Center>
      <Box justifyContent={"center"} alignItems='flex-end' minH='20'>
        <Stagger
          reverse={true}
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
            translateY: 34
          }}
          animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: true
              }
            }
          }}
          exit={{
            translateY: 34,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 50,
              stagger: {
                offset: 30,
                reverse: true
              }
            }
          }}>
          {/* <IconButton
              mb='4'
              variant='solid'
              bg='indigo.500'
              colorScheme='indigo'
              borderRadius='full'
              icon={
                <Icon
                  as={MaterialIcons}
                  size='6'
                  name='location-pin'
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color='warmGray.50'
                />
              }
            />
            <IconButton
              mb='4'
              variant='solid'
              bg='yellow.400'
              colorScheme='yellow'
              borderRadius='full'
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  _dark={{
                    color: "warmGray.50",
                  }}
                  size='6'
                  name='microphone'
                  color='warmGray.50'
                />
              }
            /> */}
          <VStack justifyContent={"center"} w='1/2' alignItems={"center"}>
            <HStack
              space={6}
              h='20'
              alignItems={"baseline"}
              justifyContent={"center"}>
              <Text
                textTransform='uppercase'
                fontSize='sm'
                fontWeight='medium'
                color='white'>
                {languages.tasks}
              </Text>
              <IconButton
                onPress={() => {
                  onToggle();
                  onNavigate("NewTask", "notes");
                }}
                p={3}
                mb='4'
                variant='solid'
                bg='teal.600'
                colorScheme='teal'
                borderRadius='full'
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    _dark={{
                      color: "warmGray.50"
                    }}
                    size='6'
                    name='format-list-checks'
                    color='warmGray.50'
                  />
                }
              />
            </HStack>
            <HStack
              space={6}
              h='20'
              alignItems={"baseline"}
              justifyContent={"center"}>
              <Text
                textAlign={"justify"}
                textBreakStrategy='balanced'
                textTransform='uppercase'
                fontSize='sm'
                fontWeight='medium'
                color='white'>
                {languages.notes}
              </Text>
              <IconButton
                p={3}
                onPress={() => {
                  onToggle();
                  onNavigate("NewTask", "tasks");
                }}
                mb='4'
                variant='solid'
                bg='amber.400'
                colorScheme='yellow'
                borderRadius='full'
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    size='6'
                    name='pen-plus'
                    _dark={{
                      color: "warmGray.50"
                    }}
                    color='warmGray.50'
                  />
                }
              />
            </HStack>
          </VStack>
        </Stagger>
        <VStack>
          <IconButton
            onLongPress={() => console.log("lox")}
            variant='solid'
            borderRadius='full'
            size='lg'
            onPress={onToggle}
            bg='darkBlue.400'
            icon={
              <Icon
                as={MaterialCommunityIcons}
                size='6'
                name='plus'
                color='warmGray.50'
                _dark={{
                  color: "warmGray.50"
                }}
              />
            }
          />
        </VStack>
      </Box>
    </Center>
  );
};

export default MenuNavigator;
