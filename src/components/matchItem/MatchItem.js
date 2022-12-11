import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RegularText} from '../texts/CustomTexts';
import MatchItemStyles from './MatchItem.styles';
import UserContext from '../../contexts/UserContext';
import ErrorContext from '../../contexts/ErrorContext';
import {useNavigation} from '@react-navigation/native';

const BetItem = props => {
  return (
    <TouchableOpacity
      style={[MatchItemStyles.betView, MatchItemStyles.active]}
      onPress={() =>
        props.onPress(props.matchId, props.type, props.odds, props.match)
      }>
      <RegularText>
        {props.type} - {props.odds}
      </RegularText>
    </TouchableOpacity>
  );
};

const MyType = props => {
  return (
    <View style={MatchItemStyles.myType.mainView}>
      <RegularText>
        Twój TYP: {props.homeGoals} : {props.awayGoals}
      </RegularText>
    </View>
  );
};

const TeamVersus = props => {
  return (
    <View style={MatchItemStyles.topView}>
      <View style={MatchItemStyles.teamNameView}>
        <RegularText>{props.match.localTeam.name}</RegularText>
      </View>
      <View style={MatchItemStyles.scoreView}>
        <RegularText>
          {props.match.score.localTeamScore} :{' '}
          {props.match.score.visitorTeamScore}
        </RegularText>
        <RegularText>{props.match.matchDate.time}</RegularText>
      </View>
      <View style={MatchItemStyles.teamNameView}>
        <RegularText>{props.match.visitorTeam.name}</RegularText>
      </View>
    </View>
  );
};

const MatchItem = props => {
  const {addToCoupon} = useContext(UserContext);
  const navigation = useNavigation();

  const addMatchToCoupon = (matchId, outcome, odds, match) => {
    let couponOnMatch = {
      id: matchId,
      outcome: outcome,
      odds: odds,
      matchData: match,
    };
    console.log(addToCoupon(couponOnMatch));
  };

  return (
    <View style={MatchItemStyles.mainView}>
      <TeamVersus match={props.match} />

      <View style={MatchItemStyles.bottomView}>
        {props.betType === 'bookmaker' && (
          <>
            <BetItem
              type={'1'}
              odds={props.match.odds[1]}
              matchId={props.match.id}
              match={props.match}
              onPress={addMatchToCoupon}
            />
            <BetItem
              type={'X'}
              odds={props.match.odds.X}
              matchId={props.match.id}
              match={props.match}
              onPress={addMatchToCoupon}
            />
            <BetItem
              type={'2'}
              odds={props.match.odds[2]}
              matchId={props.match.id}
              match={props.match}
              onPress={addMatchToCoupon}
            />
          </>
        )}
        {props.betType === 'goals' && (
          <>
            <MyType
              homeGoals={props.match.bet.goalsHome ?? '-'}
              awayGoals={props.match.bet.goalsAway ?? '-'}
            />
            <TouchableOpacity
              style={MatchItemStyles.betGoals.button}
              onPress={() =>
                navigation.navigate('Match', {match: props.match})
              }>
              <RegularText style={MatchItemStyles.betGoals.text}>
                Typuj
              </RegularText>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default MatchItem;
