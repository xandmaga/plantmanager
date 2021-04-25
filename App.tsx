import React from 'react';
import { Text } from 'react-native'
import { StyleSheet } from 'react-native';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading'
import { Welcome } from './src/pages/Welcome';
import { UserIdentification } from './src/pages/UserIdentification';

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  }
  return (
    <UserIdentification/>
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
