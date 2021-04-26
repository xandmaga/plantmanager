import React from 'react';
import { Text } from 'react-native'
import { StyleSheet } from 'react-native';
import {
  useFonts,
  Jost_300Light,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading'
import Routes from './src/routes'

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  }
  return (
    <Routes/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
