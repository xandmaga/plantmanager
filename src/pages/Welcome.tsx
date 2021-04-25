import React, { useState } from 'react';
import { 
  SafeAreaView, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native'
import { Feather } from '@expo/vector-icons'

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome(){
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie{'\n'}
        suas plantas de{'\n'}
        forma fácil
      </Text>

      <Image 
        style={styles.image} 
        source={wateringImg}
        resizeMode='contain'
      >
      </Image>
      
      <Text style={styles.subtitle}>
      Não esqueça mais de regar suas{'\n'} plantas. 
      Nós cuidaremos de lembrar você{'\n'} sempre que precisar.      
      </Text>
      
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
      >
      
      <Feather 
        style={styles.buttonIcon} 
        name="chevron-right">            
      </Feather>
      </TouchableOpacity>      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {    
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',    
    color: colors.heading,
    lineHeight: 38,
    fontFamily: fonts.heading

  },
  subtitle: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '400',
    color: colors.body,
    paddingHorizontal: 20,
    fontFamily: fonts.text
  },
  image: {    
    height: Dimensions.get('window').width * 0.7
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 20,
    height: 56,
    width: 56
  },
  buttonIcon: {
    fontSize: 32,
    color: colors.white
  }  
});
