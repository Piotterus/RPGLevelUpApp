import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import backgroundStyles from './Background.styles';

const Background = props => {
  return (
    <SafeAreaView
      style={backgroundStyles.background}
      forceInset={{top: 'always', bottom: 0, right: 0, left: 0}}>
      <View style={{flex: 1, width: '100%'}}>{props.children}</View>
    </SafeAreaView>
  );
};

export default Background;
