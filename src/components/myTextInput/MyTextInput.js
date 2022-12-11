import React, {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import {RegularText} from '../texts/CustomTexts';
import MyTextInputStyle from './MyTextInput.style';

const MyTextInput = props => {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    props.updateValue(value);
  }, [value]);

  return (
    <View style={MyTextInputStyle.container}>
      <View style={MyTextInputStyle.labelView}>
        <RegularText>{props.label}</RegularText>
      </View>
      <View style={MyTextInputStyle.textInputView}>
        <TextInput
          style={MyTextInputStyle.textInput}
          keyboardType={props.keyboardType || 'default'}
          autoCapitalize={props.autoCapitalize || 'none'}
          secureTextEntry={props.secureTextEntry || false}
          numberOfLines={1}
          multiline={!props.secureTextEntry}
          onChangeText={text => setValue(text)}
        />
      </View>
    </View>
  );
};

export default MyTextInput;
