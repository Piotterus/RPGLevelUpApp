import React from 'react';
import {View} from 'react-native';
import {MyPointsText, RegularText} from '../texts/CustomTexts';
import MyPointsStyles from './MyPoints.styles';

const MyPoints = props => {
  return (
    <View style={MyPointsStyles.mainView}>
      <MyPointsText>
        Twoje punkty:{' '}
        <MyPointsText style={MyPointsStyles.text}>
          {props.myPoints}
        </MyPointsText>
      </MyPointsText>
    </View>
  );
};

export default MyPoints;
