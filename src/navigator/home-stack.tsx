import React from 'react'
import Home from '../screens/home/Home'
import Detail from '../screens/detail/Detail'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}

export default HomeStack