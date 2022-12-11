import React, {useCallback, useContext, useEffect, useState} from 'react';
import Background from '../components/background/Background';
import {LoggedInHeader} from '../components/headers/MyHeaders';
import {BigText, RegularText} from '../components/texts/CustomTexts';
import CustomScrollView from '../components/customScrollView/CustomScrollView';
import LoggedInFooter from '../components/footer/LoggedInFooter';
import RankingItem, {
  RankingHeader,
} from '../components/rankingItem/RankingItem';
import {useFocusEffect} from '@react-navigation/native';
import useFetch from '../hooks/useFetch';
import userContext from '../contexts/UserContext';
import PointsFooter from '../components/pointsFooter/PointsFooter';

const RankingScreen = () => {
  const [rankingList, setRankingList] = useState([]);
  const {points, setPoints} = useContext(userContext);
  const {fetchData} = useFetch();

  const findMyPoints = () => {
    return rankingList.find((item, index) => {
      return item.me;
    });
  };

  useEffect(() => {
    let myPoints = findMyPoints();
    setPoints(myPoints?.points ?? 0);
  }, [rankingList]);

  useFocusEffect(
    useCallback(() => {
      fetchData(
        res => {
          setRankingList(res.ranking);
        },
        'ranking',
        null,
        null,
      );
    }, []),
  );

  const createRankingList = () => {
    return rankingList.map((item, index) => {
      return (
        <RankingItem
          key={index}
          nick={item.nick}
          points={item.points}
          place={index + 1}
          achievements={item.achievements.length}
        />
      );
    });
  };
  return (
    <Background>
      <LoggedInHeader />
      <BigText style={{textAlign: 'center', marginVertical: 10}}>
        Ranking
      </BigText>
      <CustomScrollView>
        <RankingHeader />
        {createRankingList()}
      </CustomScrollView>
      <PointsFooter />
      <LoggedInFooter />
    </Background>
  );
};

export default RankingScreen;
