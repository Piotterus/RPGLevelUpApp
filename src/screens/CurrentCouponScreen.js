import React, {useContext, useState} from 'react';
import {LoggedInHeader} from '../components/headers/MyHeaders';
import CustomScrollView from '../components/customScrollView/CustomScrollView';
import LoggedInFooter from '../components/footer/LoggedInFooter';
import Background from '../components/background/Background';
import CouponMatchItem from '../components/matchItem/CouponMatchItem';
import {BigText} from '../components/texts/CustomTexts';
import {AcceptButton} from '../components/buttons/CustomButtons';
import Modal from 'react-native-modal';
import AcceptCouponModal from '../components/matchItem/AcceptCouponModal';
import Slider from '@react-native-community/slider';
import {StyleSheet} from 'react-native';
import AppColors from '../colors';
import UserContext from '../contexts/UserContext';
import useFetch from '../hooks/useFetch';
import {ListItem} from '@rneui/themed';
import {Button} from '@rneui/base';
import MyPoints from '../components/myPoints/MyPoints';
import PointsFooter from '../components/pointsFooter/PointsFooter';
import {useNavigation} from '@react-navigation/native';

const CurrentCouponScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [betValue, setBetValue] = useState(0);
  const [minBet, setMinBet] = useState(0);
  const {points, coupon, deleteFromCoupon, clearCoupon} =
    useContext(UserContext);
  const {fetchData} = useFetch();
  const navigation = useNavigation();

  const createCouponMatchList = () => {
    return coupon.map((item, index) => {
      return (
        <ListItem.Swipeable
          Component={CouponMatchItem}
          key={index}
          match={item}
          rightContent={reset => (
            <Button
              title="Usuń"
              onPress={() => {
                deleteFromCoupon(item.id);
                reset();
              }}
              icon={{name: 'delete', color: 'white'}}
              buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
            />
          )}
        />
      );
    });
  };

  const getTotalMultiplier = () => {
    return coupon.reduce((previousValue, currentValue, currentIndex, array) => {
      return parseFloat(currentValue.odds) * parseFloat(previousValue);
    }, 1);
  };

  const sendCoupon = () => {
    const postData = {
      betValue: betValue,
      oddsSum: getTotalMultiplier(),
      matches: coupon,
    };

    setModalVisible(false);
    fetchData(
      () => {
        clearCoupon();
        navigation.navigate('MatchList');
      },
      'betCoupon',
      null,
      postData,
    );
  };

  return (
    <Background>
      <AcceptCouponModal
        visible={modalVisible}
        closeModal={() => setModalVisible(false)}
        betValue={betValue}
        setBetValue={setBetValue}
        multiplier={getTotalMultiplier}
        maxBet={points}
        minBet={minBet}
        onAccept={sendCoupon}
      />
      <LoggedInHeader />
      <BigText style={{textAlign: 'center', marginVertical: 10}}>
        Aktualny kupon
      </BigText>
      <CustomScrollView>{createCouponMatchList()}</CustomScrollView>
      <AcceptButton
        text={'Zaakceptuj'}
        onPress={() => setModalVisible(true)}
        style={styles.acceptButton}
      />
      <PointsFooter />
      <LoggedInFooter />
    </Background>
  );
};

const styles = StyleSheet.create({
  acceptButton: {
    marginBottom: 50,
  },
});

export default CurrentCouponScreen;
