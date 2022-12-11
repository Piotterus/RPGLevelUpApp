import React, {useCallback, useContext, useEffect, useState} from 'react';
import {LoggedInHeader} from '../components/headers/MyHeaders';
import CustomScrollView from '../components/customScrollView/CustomScrollView';
import LoggedInFooter from '../components/footer/LoggedInFooter';
import Background from '../components/background/Background';
import PointsFooter from '../components/pointsFooter/PointsFooter';
import MatchGoalsBet from '../components/matchGoalsBet/MatchGoalsBet';
import Icon from 'react-native-vector-icons/Feather';

const MatchScreen = () => {
  // useFocusEffect(
  //   useCallback(() => {
  //     fetchData(
  //       res => {
  //         setMatchList(processMatchList(res.matchesList));
  //       },
  //       'matchesList',
  //       null,
  //       null,
  //     );
  //   }, []),
  // );

  return (
    <Background>
      <LoggedInHeader />
      <CustomScrollView containerStyle={{justifyContent: 'center'}}>
        <MatchGoalsBet />
      </CustomScrollView>
      <PointsFooter />
      <LoggedInFooter />
    </Background>
  );
};

export default MatchScreen;
