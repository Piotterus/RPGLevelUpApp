import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {BigText} from '../texts/CustomTexts';
import CustomButtonsStyle from './CustomButtons.style';

export const LoginButton = props => {
  return (
    <TouchableOpacity
      style={CustomButtonsStyle.loginButton.container}
      onPress={props.onPress}>
      <BigText style={CustomButtonsStyle.loginButton.text}>Zaloguj się</BigText>
    </TouchableOpacity>
  );
};

export const RegisterButton = props => {
  return (
    <TouchableOpacity
      style={CustomButtonsStyle.loginButton.container}
      onPress={props.onPress}>
      <BigText style={CustomButtonsStyle.loginButton.text}>
        Zarejestruj się
      </BigText>
    </TouchableOpacity>
  );
};

export const AcceptButton = props => {
  return (
    <TouchableOpacity
      style={[CustomButtonsStyle.acceptButton.container, props.style]}
      onPress={props.onPress}>
      <BigText style={CustomButtonsStyle.acceptButton.text}>
        {props.text}
      </BigText>
    </TouchableOpacity>
  );
};

export const ActionButton = props => {
  return (
    <TouchableOpacity
      style={[CustomButtonsStyle.actionButton.container, props.style]}
      onPress={props.onPress}>
      <BigText style={CustomButtonsStyle.actionButton.text}>
        {props.text}
      </BigText>
    </TouchableOpacity>
  );
};

export const ActionAnswerButton = props => {
  return (
    <TouchableOpacity
      style={[CustomButtonsStyle.actionAnswerButton.container, props.style]}
      onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
};
