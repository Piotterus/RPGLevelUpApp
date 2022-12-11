import React, {useCallback, useContext, useState} from 'react';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {BigText, RegularText} from '../texts/CustomTexts';
import MatchGoalsBetStyles from './MatchGoalsBet.styles';
import {AcceptButton} from '../buttons/CustomButtons';
import useFetch from '../../hooks/useFetch';
import ErrorContext from '../../contexts/ErrorContext';

const MatchGoalsBet = () => {
  const [betGoals1, setBetGoals1] = useState();
  const [betGoals2, setBetGoals2] = useState();
  const [match, setMatch] = useState({});
  const route = useRoute();
  const navigation = useNavigation();
  const {fetchData} = useFetch();
  const {showError, clearError} = useContext(ErrorContext);

  useFocusEffect(
    useCallback(() => {
      console.log(route.params.match);
      setMatch(route.params.match);
      setBetGoals1(route.params.match.bet.goalsHome);
      setBetGoals2(route.params.match.bet.goalsAway);
    }, [route.params.match]),
  );

  const sendBet = () => {
    if (betGoals1 === undefined || betGoals2 === undefined) {
      const error = {
        code: 1,
        message: 'Musisz podać gole dla obu klubów',
      };
      showError(error);
    }
    let postData = {
      matchId: match.id,
      goalsHome: betGoals1,
      goalsAway: betGoals2,
    };
    console.log(JSON.stringify(postData));
    fetchData(
      () => {
        navigation.goBack();
      },
      'betMatch',
      null,
      postData,
    );
  };

  return (
    <View>
      <View style={MatchGoalsBetStyles.elementView}>
        <View style={MatchGoalsBetStyles.teamView}>
          <Image
            source={{uri: match?.league?.logo}}
            width={100}
            height={100}
            style={{width: 50, height: 50}}
          />
          <BigText>{match?.league?.name}</BigText>
        </View>
      </View>
      <View style={MatchGoalsBetStyles.elementView}>
        <View style={MatchGoalsBetStyles.teamView}>
          {match?.localTeam?.logo !== null && (
            <Image
              source={{uri: match?.localTeam?.logo}}
              width={100}
              height={100}
              style={{width: 50, height: 50}}
            />
          )}
          <BigText>{match?.localTeam?.name}</BigText>
        </View>
        <RegularText>vs</RegularText>
        <View style={MatchGoalsBetStyles.teamView}>
          {match?.localTeam?.logo !== null && (
            <Image
              source={{uri: match?.visitorTeam?.logo}}
              width={100}
              height={100}
              style={{width: 50, height: 50}}
            />
          )}
          <BigText>{match?.visitorTeam?.name}</BigText>
        </View>
      </View>
      <View style={MatchGoalsBetStyles.elementView}>
        <TextInput
          value={betGoals1}
          onChangeText={text => setBetGoals1(text)}
          keyboardType={'numeric'}
          style={MatchGoalsBetStyles.textInput}
        />
        <BigText>:</BigText>
        <TextInput
          value={betGoals2}
          onChangeText={text => setBetGoals2(text)}
          keyboardType={'numeric'}
          style={MatchGoalsBetStyles.textInput}
        />
      </View>
      <AcceptButton
        style={MatchGoalsBetStyles.button}
        text={'Zatwierdź'}
        onPress={() => sendBet()}
      />
      <AcceptButton
        style={MatchGoalsBetStyles.button}
        text={'Wróć'}
        onPress={() => navigation.goBack()}
      />
      {/*<TouchableOpacity*/}
      {/*  style={{*/}
      {/*    flexDirection: 'row',*/}
      {/*    flex: 1,*/}
      {/*    alignItems: 'center',*/}
      {/*    justifyContent: 'space-around',*/}
      {/*    width: '100%',*/}
      {/*    padding: 10,*/}
      {/*    backgroundColor: AppColors.lightBlue,*/}
      {/*    borderRadius: 10,*/}
      {/*    marginTop: 20,*/}
      {/*  }}>*/}
      {/*  <BigText>Zatwierdź</BigText>*/}
      {/*</TouchableOpacity>*/}
    </View>
  );
};

export default MatchGoalsBet;
