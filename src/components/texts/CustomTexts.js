import React from 'react';
import {Text} from 'react-native';
import RegularTextStyle from './CustomTexts.style';

export const RegularText = props => {
  return (
    <Text style={[RegularTextStyle.regularText, props.style]}>
      {props.children}
    </Text>
  );
};

export const SmallText = props => {
  return (
    <Text style={[RegularTextStyle.smallText, props.style]}>
      {props.children}
    </Text>
  );
};

export const MyPointsText = props => {
  return (
    <Text style={[RegularTextStyle.myPointsText, props.style]}>
      {props.children}
    </Text>
  );
};

export const HeaderText = props => {
  return (
    <Text style={[RegularTextStyle.headerText, props.style]}>
      {props.children}
    </Text>
  );
};

export const BigText = props => {
  return (
    <Text style={[RegularTextStyle.bigText, props.style]}>
      {props.children}
    </Text>
  );
};

export const CapitalizedText = props => {
  return (
    <Text style={[RegularTextStyle.capitalizedText, props.style]}>
      {props.children}
    </Text>
  );
};
