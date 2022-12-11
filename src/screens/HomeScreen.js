import React, {useCallback, useContext, useEffect, useState} from 'react';
import Background from '../components/background/Background';
import {LoggedInHeader, LoggedOutHeader} from '../components/headers/MyHeaders';
import CustomScrollView from '../components/customScrollView/CustomScrollView';
import LoggedInFooter from '../components/footer/LoggedInFooter';
import {
  BigText,
  CapitalizedText,
  HeaderText,
  RegularText,
} from '../components/texts/CustomTexts';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icons from '../icons/icons';
import AppColors from '../colors';
import useFetch from '../hooks/useFetch';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import UserContext from '../contexts/UserContext';
import MyPoints from '../components/myPoints/MyPoints';
import PointsFooter from '../components/pointsFooter/PointsFooter';
import AchievementsModal from '../components/achievementsModal/AchievementsModal';
import {AcceptButton} from '../components/buttons/CustomButtons';
import colors from '../colors';
import icons from '../icons/icons';
import {RowPanel, StatsPanel} from '../components/customPanels/CustomPanels';

const DataView = props => {
  return (
    <TouchableOpacity
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      onPress={props.onPress}
      disabled={props.onPress === undefined}>
      <CapitalizedText>{props.text}</CapitalizedText>
      <Image source={props.icon} />
      <CapitalizedText>{props.value}</CapitalizedText>
    </TouchableOpacity>
  );
};

const HomeScreen = () => {
  const [cash, setCash] = useState('');
  const [energy, setEnergy] = useState('');
  const [clients, setClients] = useState('');
  const [promotion, setPromotion] = useState('');
  const [price, setPrice] = useState('');
  const [food, setFood] = useState('');
  const [workers, setWorkers] = useState([]);
  const [upgrades, setUpgrades] = useState([]);
  const {fetchData} = useFetch();
  const {points, setPoints} = useContext(UserContext);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const responseFetch = fetchData(
        res => {
          setCash(res.data.user.cash);
          setEnergy(res.data.user.energy);
          setClients(res.data.user.clients);
          setPromotion(res.data.user.promotion);
          setPrice(res.data.user.price);
          setFood(res.data.user.food);
          setWorkers(res.data.user.workers);
          setUpgrades(res.data.user.upgrades);
          setPoints(res.data.user.points);
        },
        'dashboard',
        null,
        null,
      );
    }, []),
  );

  return (
    <Background>
      {/*<AchievementsModal*/}
      {/*  visible={achievementsModalVisible}*/}
      {/*  achievements={achievements}*/}
      {/*  closeModal={() => setAchievementsModalVisible(false)}*/}
      {/*/>*/}
      <LoggedInHeader />
      <CustomScrollView>
        <RowPanel>
          <StatsPanel label={'Energia'}>
            <Image source={icons.rpg.energy} />
            <HeaderText>{energy}</HeaderText>
          </StatsPanel>
          <StatsPanel label={'Kasa'}>
            <Image source={icons.rpg.cash} />
            <HeaderText>{cash}</HeaderText>
          </StatsPanel>
          <StatsPanel label={'Klienci'}>
            <Image source={icons.rpg.client} />
            <HeaderText>{clients}</HeaderText>
          </StatsPanel>
        </RowPanel>
        <RowPanel>
          <StatsPanel label={'Promocja'}>
            <Image source={icons.rpg.promotion} />
            <HeaderText>{promotion}</HeaderText>
          </StatsPanel>
          <StatsPanel label={'Cena'}>
            <Image source={icons.rpg.price} />
            <HeaderText>{price}</HeaderText>
          </StatsPanel>
          <StatsPanel label={'Jedzenie'}>
            <Image source={icons.rpg.food} />
            <HeaderText>{food}</HeaderText>
          </StatsPanel>
        </RowPanel>
        <RowPanel>
          <StatsPanel label={'Punkty'}>
            <Image source={icons.rpg.points} />
            <HeaderText>{points}</HeaderText>
          </StatsPanel>
          <StatsPanel
            label={'Pracownicy'}
            onPress={() =>
              navigation.navigate('WorkersList', {workersList: workers})
            }>
            <Image source={icons.rpg.workers} />
            <HeaderText>{workers.length}</HeaderText>
          </StatsPanel>
          <StatsPanel
            label={'Ulepszenia'}
            onPress={() =>
              navigation.navigate('UpgradesList', {upgradesList: upgrades})
            }>
            <Image source={icons.rpg.upgrades} />
            <HeaderText>{upgrades.length}</HeaderText>
          </StatsPanel>
        </RowPanel>
        <AcceptButton
          onPress={() => navigation.navigate('ActionList')}
          text={'Wykonuj akcje'}
          style={{
            width: '90%',
            alignSelf: 'center',
            height: 50,
            marginVertical: 5,
            backgroundColor: colors.lightBlue,
          }}
        />
        <AcceptButton
          onPress={() => navigation.navigate('ClientList')}
          text={'Sprawdź klientów'}
          style={{
            width: '90%',
            alignSelf: 'center',
            height: 50,
            marginVertical: 5,
            backgroundColor: colors.lightBlue,
          }}
        />
      </CustomScrollView>
      <PointsFooter />
      <LoggedInFooter />
    </Background>
  );
};

export default HomeScreen;
