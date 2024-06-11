import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontFammilies } from './src/constants/fontFamily'
import HomeScreen from './src/Homes/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import Router from './src/routes/Router'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </SafeAreaView>
  )
}

