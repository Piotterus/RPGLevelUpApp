import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RegularText} from '../texts/CustomTexts';
import MatchItemStyles from './MatchItem.styles';
import UserContext from '../../contexts/UserContext';
import ErrorContext from '../../contexts/ErrorContext';
import {useNavigation} from '@react-navigation/native';

const BetItem = props => {
  return (
    <View style={[MatchItemStyles.betView, MatchItemStyles.active]}>
      <RegularText>
        {props.type} - {props.odds}
      </RegularText>
    </View>
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

const MatchHistoryItem = props => {
  return (
    <View style={MatchItemStyles.mainView}>
      <TeamVersus match={props.match} />
      <View style={MatchItemStyles.bottomView}>
        <MyType
          homeGoals={props.match.bet.goalsHome ?? '-'}
          awayGoals={props.match.bet.goalsAway ?? '-'}
        />
        <View style={MatchItemStyles.betGoals.button}>
          <RegularText style={MatchItemStyles.betGoals.text}>
            Punkty: {props.match.bet.points ?? '-'}
          </RegularText>
        </View>
      </View>
      <View style={MatchItemStyles.bottomView}>
        <BetItem
          type={'1'}
          odds={props.match.odds[1]}
          matchId={props.match.id}
          match={props.match}
        />
        <BetItem
          type={'X'}
          odds={props.match.odds.X}
          matchId={props.match.id}
          match={props.match}
        />
        <BetItem
          type={'2'}
          odds={props.match.odds[2]}
          matchId={props.match.id}
          match={props.match}
        />
      </View>
    </View>
  );
};

export default MatchHistoryItem;
