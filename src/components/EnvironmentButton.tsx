import React from 'react';
import { Text, StyleSheet } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnvironmentButton(
  {
    title, 
    active = false,
    ...rectButtonProps
  }: EnvironmentButtonProps){
    return (
      <RectButton 
        style={[
          styles.container,
          active && styles.containerActive
        ]}
        {...rectButtonProps} >
        <Text style={[
          styles.text,
          active && styles.textActive
          ]}>
          {title}
        </Text>
      </RectButton>

    )
}

const styles = StyleSheet.create({
  container: {    
    backgroundColor: colors.shape,
    height: 40,
    width: 76,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 5
  },
  containerActive: {    
    backgroundColor: colors.green_light,
    height: 40,
    width: 76,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 5
  },  
  text: {
    fontSize: 13,
    fontFamily: fonts.complement,
    lineHeight: 23,
    color: colors.heading
  },
  textActive: {
    fontSize: 13,
    fontFamily: fonts.heading,
    lineHeight: 23,
    color: colors.green_dark
  }  
})