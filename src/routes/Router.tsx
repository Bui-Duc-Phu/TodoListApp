import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Homes/HomeScreen'
import AddNewTask from '../tasks/AddNewTask'
import SearchScreen from '../screens/SearchScreen'
import auth from '@react-native-firebase/auth'
import LoginScreen from '../auth/LoginScreen'
import MyScreen from '../components/MyScreen '
import SignUpScreen from '../auth/SignUpScreen'


const Router = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setIsLogin(true)
      } else {
        setIsLogin(false)
      }
    })

  }, [])

  const Stack = createNativeStackNavigator()

  const mainRouter = <Stack.Navigator screenOptions={{ headerShown: false, }}>
    <Stack.Screen name='HomeScreen' component={HomeScreen} />
    <Stack.Screen name='AddNewTask' component={AddNewTask} />
    <Stack.Screen name='SearchScreen' component={SearchScreen} />
  </Stack.Navigator>


  const AuthenRouter = <Stack.Navigator screenOptions={{ headerShown: false, }}>
      
    <Stack.Screen name='LoginScreen' component={LoginScreen} />
    <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
  </Stack.Navigator>



  return isLogin  ?   mainRouter : AuthenRouter 
}

export default Router