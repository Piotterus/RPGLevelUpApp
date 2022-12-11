import React, {useCallback, useContext, useState} from 'react';
import Background from '../components/background/Background';
import AcceptCouponModal from '../components/matchItem/AcceptCouponModal';
import {LoggedInHeader} from '../components/headers/MyHeaders';
import {BigText, RegularText} from '../components/texts/CustomTexts';
import CustomScrollView from '../components/customScrollView/CustomScrollView';
import {AcceptButton} from '../components/buttons/CustomButtons';
import LoggedInFooter from '../components/footer/LoggedInFooter';
import {Text, View} from 'react-native';
import CouponItem from '../components/couponItem/CouponItem';
import {useFocusEffect} from '@react-navigation/native';
import useFetch from '../hooks/useFetch';
import MyPoints from '../components/myPoints/MyPoints';
import userContext from '../contexts/UserContext';
import PointsFooter from '../components/pointsFooter/PointsFooter';

const CouponListScreen = () => {
  const [couponList, setCouponList] = useState([]);
  const {fetchData} = useFetch();
  const {points} = useContext(userContext);

  useFocusEffect(
    useCallback(() => {
      fetchData(
        res => {
          setCouponList(res.couponList);
        },
        'coupons',
        null,
        null,
      );
    }, []),
  );

  const createCouponList = () => {
    return couponList.map((item, index) => {
      return (
        <CouponItem
          key={index}
          dateAdd={item.dateAdd}
          dateFinish={item.dateFinish}
          status={item.status}
          matchList={item.matchList}
          betAmount={item.value}
          winAmount={item.valueWon}
        />
      );
    });
  };

  return (
    <Background>
      <LoggedInHeader />
      <BigText style={{textAlign: 'center', marginVertical: 10}}>
        Twoje kupony
      </BigText>
      <CustomScrollView>{createCouponList()}</CustomScrollView>
      <PointsFooter />
      <LoggedInFooter />
    </Background>
  );
};

export default CouponListScreen;
