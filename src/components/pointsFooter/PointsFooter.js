import React, {useContext} from 'react';
import MyPoints from '../myPoints/MyPoints';
import UserContext from '../../contexts/UserContext';
import {Text, TouchableOpacity, View} from 'react-native';
import PointsFooterStyles from './PointsFooter.styles';
import {MyPointsText} from '../texts/CustomTexts';
import {useNavigation, useRoute} from '@react-navigation/native';

export const BetGoals = props => {
  return (
    <TouchableOpacity
      style={PointsFooterStyles.betGoals.mainView}
      onPress={() => {
        if (props.betType === 'bookmaker') {
          props.setBetType('goals');
        } else {
          props.setBetType('bookmaker');
        }
      }}>
      <MyPointsText style={PointsFooterStyles.betGoals.text}>
        Typy {props.betType === 'bookmaker' ? 'dokładne' : 'bukmacherskie'}
      </MyPointsText>
    </TouchableOpacity>
  );
};

const PointsFooter = props => {
  const {points} = useContext(UserContext);
  const route = useRoute();

  return (
    <View style={{width: '100%'}}>
      <View style={PointsFooterStyles.mainView}>
        {route.name === 'MatchList' && (
          <BetGoals betType={props.betType} setBetType={props.setBetType} />
        )}
        {route.name !== 'MatchList' && <View />}
        <MyPoints myPoints={points} />
      </View>
    </View>
  );
};

export default PointsFooter;
