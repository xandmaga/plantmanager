import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title, ...touchableOpacityProps }: ButtonProps){
  return (
  <TouchableOpacity 
    style={styles.container}
    activeOpacity={0.7}
  >
  
    <Text style={styles.text} >{title}</Text>
  </TouchableOpacity>      
  );
}


const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16
  },
  text: {
    fontSize: 17,
    fontFamily: fonts.text,
    fontWeight: '500',
    color: colors.white,
    lineHeight: 23,
    textAlign: 'center'    
  }
});

