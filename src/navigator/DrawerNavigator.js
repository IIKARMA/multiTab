import * as React from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from '@react-navigation/drawer'
import HomeNavigator from './HomeNavigator'
import { theme } from '../core/colors'
import { Feather } from '@expo/vector-icons'

const { Screen, Navigator } = createDrawerNavigator()
const date = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ color: theme.text }}>sad</Text>
    </View>
  )
}
const DrawerNavigator = () => {
  return (
    <Navigator
      drawerContent={(props) => {
			  return (
  <DrawerContentScrollView style={{}}>
    <ImageBackground
      style={StyleSheet.absoluteFill}
      source={require('../icons/back.png')}
      resizeMode='cover'
    />
    <DrawerItem labelStyle={{ color: theme.text }} label={date} />
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
			  )
      }}
      initialRouteName='HomeScreen'
      screenOptions={{
			  drawerStyle: {
			    backgroundColor: '#333333'
			  },
			  headerShown: false,
			  drawerType: 'front'
      }}
    >
      <Screen name='HomeScreen' component={HomeNavigator} />
    </Navigator>
  )
}
export default DrawerNavigator
