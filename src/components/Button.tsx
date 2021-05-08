import React from 'react';
import { 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  TouchableOpacityProps
} from 'react-native'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title, disabled, ...touchableOpacityProps }: ButtonProps){
  return (
  <TouchableOpacity 
    style={disabled ? styles.containerDisabled: styles.container }
    disabled={disabled}
    {...touchableOpacityProps}
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
    borderRadius: 16,
  },
  containerDisabled: {
    height: 56,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    opacity: 0.7
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

