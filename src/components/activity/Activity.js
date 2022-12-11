import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import ActivityStyles from './Activity.styles';
import AppColors from '../../colors';

const Activity = props => {
  return (
    <View style={ActivityStyles.mainView}>
      <ActivityIndicator size={70} color={AppColors.dark} />
    </View>
  );
};

export default Activity;
