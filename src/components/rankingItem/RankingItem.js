import React from 'react';
import {BigText, RegularText} from '../texts/CustomTexts';
import {Image, View} from 'react-native';
import RankingItemStyles from './RankingItem.styles';
import Icons from '../../icons/icons';

const RankingItem = props => {
  return (
    <View style={RankingItemStyles.mainView}>
      <RegularText style={RankingItemStyles.placeText}>
        {props.place}
      </RegularText>
      <RegularText style={RankingItemStyles.playerText}>
        {props.nick}
      </RegularText>
      <RegularText
        style={[RankingItemStyles.achievementText, {textAlign: 'center'}]}>
        {props.achievements}
      </RegularText>
      <RegularText style={RankingItemStyles.pointsText}>
        {props.points}
      </RegularText>
    </View>
  );
};

export const RankingHeader = () => {
  return (
    <View style={RankingItemStyles.mainView}>
      <RegularText style={RankingItemStyles.placeText}>Lp</RegularText>
      <RegularText style={RankingItemStyles.playerText}>Zawodnik</RegularText>
      <RegularText style={RankingItemStyles.achievementText}>
        Osiągnięcia
      </RegularText>
      <RegularText style={RankingItemStyles.pointsText}>Punkty</RegularText>
    </View>
  );
};

export default RankingItem;
