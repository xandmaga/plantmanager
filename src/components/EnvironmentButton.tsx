import React from 'react';
import { Text, StyleSheet } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import colors from '../styles/colors';

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
        style={styles.container}
        {...rectButtonProps} >
        <Text style={styles.text}>
          {title}
        </Text>
      </RectButton>

    )
}

const styles = StyleSheet.create({
  container: {},
  text: {}
})