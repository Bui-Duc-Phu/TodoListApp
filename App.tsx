import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import Router from './src/routes/Router'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </SafeAreaView>
  )
}

