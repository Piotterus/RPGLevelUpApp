import React from 'react';
import {ScrollView, View} from 'react-native';
import CustomScrollViewStyle from './CustomScrollView.style';

const CustomScrollView = props => {
  return (
    <ScrollView
      style={[CustomScrollViewStyle.mainView, props.style]}
      contentContainerStyle={[
        CustomScrollViewStyle.containerStyle,
        props.containerStyle,
      ]}>
      {props.children}
      <View style={{height: 50}} />
    </ScrollView>
  );
};

export default CustomScrollView;
