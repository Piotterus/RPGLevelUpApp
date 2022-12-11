import React, {useCallback, useContext, useEffect, useState} from 'react';
import {LoggedInHeader} from '../components/headers/MyHeaders';
import CustomScrollView from '../components/customScrollView/CustomScrollView';
import LoggedInFooter from '../components/footer/LoggedInFooter';
import Background from '../components/background/Background';
import LeaguesScroll from '../components/leaguesScroll/LeaguesScroll';
import MatchDate from '../components/matchDate/MatchDate';
import MatchItem from '../components/matchItem/MatchItem';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import useFetch from '../hooks/useFetch';
import PointsFooter from '../components/pointsFooter/PointsFooter';
import MatchHistoryItem from '../components/matchItem/MatchHistoryItem';

const MatchHistoryScreen = () => {
  const [matchList, setMatchList] = useState([]);
  const [leagueList, setLeagueList] = useState([]);
  const {fetchData} = useFetch();
  const [chosenLeague, setChosenLeague] = useState(undefined);
  const [betType, setBetType] = useState('bookmaker');
  const route = useRoute();

  useEffect(() => {
    let leagueArray = [];
    matchList.forEach((list, listIndex) => {
      list.list.forEach((item, index) => {
        let leagueArrayIndex = leagueArray.findIndex((league, leagueIndex) => {
          return league.id === item.league.id;
        });
        if (leagueArray[leagueArrayIndex] === undefined) {
          leagueArray.push(item.league);
        }
      });
    });
    setLeagueList(leagueArray);
  }, [matchList]);

  const processMatchList = matches => {
    let dateArray = [];
    matches.forEach((item, index) => {
      let dateArrayIndex = dateArray.findIndex((dateItem, dateIndex) => {
        return dateItem.date === item.matchDate.date;
      });
      if (dateArray[dateArrayIndex] === undefined) {
        dateArray.push({
          date: item.matchDate.date,
          list: [item],
        });
      } else {
        dateArray[dateArrayIndex].list = [
          ...dateArray[dateArrayIndex].list,
          item,
        ];
      }
    });

    dateArray.sort((item1, item2) => {
      return item1.date < item2.date;
    });

    dateArray.forEach((item, index) => {
      // console.log(item.list);
      item.list.sort((match1, match2) => {
        if (match1.matchDate.time > match2.matchDate.time) {
          // console.log(`${match1.matchDate.time} > ${match2.matchDate.time}`);
          return 1;
        } else if (match1.matchDate.time > match2.matchDate.time) {
          return 0;
        } else {
          // console.log(`${match1.matchDate.time} == ${match2.matchDate.time}`);
          return match1.id > match2.id;
        }
      });
    });

    return dateArray;
  };

  useFocusEffect(
    useCallback(() => {
      fetchData(
        res => {
          setMatchList(processMatchList(res.matchesList));
        },
        'matchHistory',
        null,
        null,
      );
    }, []),
  );

  const createMatchList = () => {
    return matchList.map((item, index) => {
      let matches = item.list.map((match, matchIndex) => {
        if (chosenLeague === undefined || match.league.id === chosenLeague) {
          return (
            <MatchHistoryItem
              key={matchIndex}
              match={match}
              betType={betType}
            />
          );
        } else {
          return null;
        }
      });
      let filteredMatches = matches.filter((item, index) => item !== null);
      if (filteredMatches.length > 0) {
        return (
          <React.Fragment key={index}>
            <MatchDate date={item.date} />
            {filteredMatches}
          </React.Fragment>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <Background>
      <LoggedInHeader />
      <LeaguesScroll
        list={leagueList}
        active={chosenLeague}
        setActive={setChosenLeague}
      />
      <CustomScrollView>{createMatchList()}</CustomScrollView>
      <PointsFooter />
      <LoggedInFooter />
    </Background>
  );
};

export default MatchHistoryScreen;
