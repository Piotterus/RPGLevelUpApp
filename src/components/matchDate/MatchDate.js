import React from 'react';
import {RegularText} from '../texts/CustomTexts';
import {View} from 'react-native';
import MatchDateStyles from './MatchDate.styles';

const MatchDate = props => {
  return (
    <View style={MatchDateStyles.mainView}>
      <RegularText>Data: </RegularText>
      <RegularText>{props.date}</RegularText>
    </View>
  );
};

export default MatchDate;
