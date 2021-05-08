import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PrimaryPlantCardProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}

export function PrimaryPlantCard({ data, ...primaryPlantCardProps }: PrimaryPlantCardProps){
  return (
      <RectButton style={styles.container}>
        <SvgFromUri uri={data.photo} width='73' height='86' ></SvgFromUri>
        <Text style={styles.text}>{data.name}</Text>
      </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',    
    backgroundColor: colors.shape,
    paddingVertical: 10,
    margin: 20
  },
  text: {
    fontFamily: fonts.heading,
    color: colors.heading,
    fontSize: 13,
    lineHeight: 23,
    marginTop: 12,
    marginBottom: 16
  }
})
