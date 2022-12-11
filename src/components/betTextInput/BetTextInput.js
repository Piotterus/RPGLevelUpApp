import React, {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import {RegularText} from '../texts/CustomTexts';
import BetTextInputStyles from './BetTextInput.styles';

const BetTextInput = props => {
  return (
    <TextInput
      style={[BetTextInputStyles.textInput, props.style]}
      keyboardType={'numeric'}
      autoCapitalize={props.autoCapitalize || 'none'}
      secureTextEntry={props.secureTextEntry || false}
      numberOfLines={1}
      multiline={!props.secureTextEntry}
      onChangeText={text => props.updateValue(text)}
      value={props.value.toString()}
    />
  );
};

export default BetTextInput;
