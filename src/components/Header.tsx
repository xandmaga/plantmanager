import React from 'react';
import { 
  Image,
  StyleSheet,
  Text,
  View
 } from 'react-native'
 import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import alexandreImg from '../assets/alexandre.png'
import colors from '../styles/colors';
import fonts from '../styles/fonts';



 interface HeaderProps {
   name: string;
 }

export function Header({ name }: HeaderProps){
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting} >
          Olá,
        </Text>
        <Text style={styles.username} >
          {name}
        </Text>
      </View>
      <Image 
        style={styles.perfilImg}
        source={alexandreImg} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight()
  },
  greeting: {
    fontFamily: fonts.textLight,
    color: colors.heading,
    fontSize: 32,
  },
  username: {
    fontFamily: fonts.heading,
    color: colors.heading,
    fontSize: 32,
    lineHeight: 40

  },
  perfilImg: {
    width: 70,
    height: 70,
    borderRadius: 35
  }
})