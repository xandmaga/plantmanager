import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function PlantSelect(){
  return (
    <View style={styles.container}>
      <View style={styles.header}>      
      <Header name={'Alexandre'} ></Header>
        <Text style={styles.questionHeader} >
        Em qual hambiente
        </Text>
        <Text style={styles.questionFooter} >
        você quer colocar sua planta?
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    paddingHorizontal: 30
  },
  questionHeader: {
    fontFamily: fonts.heading,
    color: colors.body,
    fontSize: 17,
  },
  questionFooter: {
    fontFamily: fonts.text,
    color: colors.body,
    fontSize: 17
  }    
})