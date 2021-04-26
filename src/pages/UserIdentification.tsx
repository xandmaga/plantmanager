import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform, SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification(){
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const navigation = useNavigation();

  function handleConfirmarPress(){
    navigation.navigate('Confirmation');
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {    
    setName(value);
  }

  return (
    <SafeAreaView style={styles.container} >

      <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.emoji}>
                { isFilled ? '😄' : '😃'  }
              </Text>
              <Text style={styles.title}>          
              Como podemos{'\n'} chamar você?
              </Text>
              <TextInput 
              style={[
                styles.input,
                (isFocused || isFilled) && { borderColor: colors.green}
              ]} 
              placeholder='Digite um nome' 
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
              value={name}
            >              
            </TextInput>              
          </View>

          </View>
        </TouchableWithoutFeedback>
        
        <View style={styles.footer}>
          <Button 
          title='Confirmar'
          disabled={!isFilled}
          activeOpacity={0.7}
          onPress={handleConfirmarPress} 
          />
        </View>                            


      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  form: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 54,
    alignItems: 'center'
  },
  header: {
    alignItems: 'center'
  },
  footer: {
    marginBottom: 300,  
    width: '100%',
    paddingHorizontal: 54  
  }, 
  emoji:{
    fontSize: 44
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 20
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    fontSize: 17,
    fontFamily: fonts.text,
    color: colors.body,
    width: '100%',
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  }
})
