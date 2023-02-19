
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeStack from './home-stack'
import Filter from '../screens/filter/Filter'

const Stack = createStackNavigator()

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
      <Stack.Screen name="HomeStack" component={HomeStack} />

      <Stack.Group   screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen initialParams={{modal: true}}  name="Filter" component={Filter} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default RootStack