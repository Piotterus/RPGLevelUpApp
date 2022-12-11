import React from 'react';
import MatchItemStyles from './MatchItem.styles';
import {Image, View} from 'react-native';
import {RegularText} from '../texts/CustomTexts';

const BetItem = props => {
  return (
    <View style={MatchItemStyles.betView}>
      <RegularText>Typ {props.match.outcome}</RegularText>
      <RegularText>Kurs {props.match.odds}</RegularText>
    </View>
  );
};

const TeamVersus = props => {
  return (
    <View style={MatchItemStyles.topView}>
      <View style={MatchItemStyles.teamNameView}>
        <RegularText>{props.match.matchData.localTeam.name}</RegularText>
      </View>
      <View style={MatchItemStyles.scoreView}>
        <RegularText>
          {props.match.matchData.score.localTeamScore} :{' '}
          {props.match.matchData.score.visitorTeamScore}
        </RegularText>
        <RegularText>
          {props.match.matchData.matchDate.date}{' '}
          {props.match.matchData.matchDate.time}
        </RegularText>
      </View>
      <View style={MatchItemStyles.teamNameView}>
        <RegularText>{props.match.matchData.visitorTeam.name}</RegularText>
      </View>
    </View>
  );
};

const CouponMatchItem = props => {
  return (
    <View style={MatchItemStyles.mainView}>
      <TeamVersus match={props.match} />
      <View style={MatchItemStyles.bottomView}>
        <BetItem match={props.match} />
      </View>
    </View>
  );
};

export default CouponMatchItem;
