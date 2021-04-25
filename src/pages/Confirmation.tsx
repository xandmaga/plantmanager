import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation(){

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.content} >
        <Text style={styles.emoji}>
          😁
        </Text>
        <Text style={styles.title}>          
        Prontinho
        </Text>
        <Text style={styles.subtitle}>          
        Agora vamos começar a cuidar das suas{'\n'} plantinhas com muito cuidado.
        </Text>
        <View style={styles.footer}>
        <Button 
        style={ {opacity: 0.2}}
        title='Começar' 
          />
        </View>          
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',    
    justifyContent: 'space-around'    
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center'
  },
  emoji:{
    alignItems: 'center',
    fontSize: 96
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 24,
    lineHeight: 30,    
    textAlign: 'center',
    color: colors.heading,
    marginTop: 20
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 25,
    textAlign: 'center',
    color: colors.body,
    paddingVertical: 10
  },  
  footer: {
    width: '100%',
    paddingHorizontal: 75,
    marginTop: 30
  }
})
