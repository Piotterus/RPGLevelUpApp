import React, {useEffect, useRef, useState} from 'react';
import {Image, ScrollView, TouchableOpacity, View, Easing} from 'react-native';
import {BigText, RegularText} from '../texts/CustomTexts';
import CouponItemStyles from './CouponItem.styles';
import icons from '../../icons/icons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import MatchItemStyles from '../matchItem/MatchItem.styles';

const TeamVersus = props => {
  return (
    <View style={CouponItemStyles.matchView.betView}>
      <View style={MatchItemStyles.teamNameView}>
        <RegularText>{props.match.localTeam.name}</RegularText>
      </View>
      <View style={CouponItemStyles.matchView.scoreView}>
        <RegularText>
          {props.match.score.localTeamScore} :{' '}
          {props.match.score.visitorTeamScore}
        </RegularText>
        <RegularText>
          {props.match.matchDate.date} {props.match.matchDate.time}
        </RegularText>
      </View>
      <View style={MatchItemStyles.teamNameView}>
        <RegularText>{props.match.visitorTeam.name}</RegularText>
      </View>
    </View>
  );
};

const CouponMatchItem = props => {
  const getStatusImage = () => {
    if (props.match.bet.status === 'won') {
      return icons.match.wonSmall;
    } else if (props.match.bet.status === 'lost') {
      return icons.match.lostSmall;
    } else if (props.match.bet.status === 'pending') {
      return icons.match.pendingSmall;
    } else {
      return icons.match.errorSmall;
    }
  };

  return (
    <View style={CouponItemStyles.matchView.mainView}>
      <TeamVersus match={props.match} />
      <View style={CouponItemStyles.matchView.betView}>
        <View style={CouponItemStyles.matchView.scoreView}>
          <RegularText>Typ</RegularText>
          <BigText>{props.match.bet.outcome}</BigText>
        </View>
        <View style={CouponItemStyles.matchView.scoreView}>
          <RegularText>Status</RegularText>
          <Image
            source={getStatusImage()}
            style={CouponItemStyles.matchView.imageStatus}
            resizeMode={'contain'}
          />
        </View>
        <View style={CouponItemStyles.matchView.scoreView}>
          <RegularText>Kurs</RegularText>
          <BigText>{props.match.bet.odds}</BigText>
        </View>
      </View>
    </View>
  );
};

const CouponItem = props => {
  const startingHeight = 0;
  const [expanded, setExpanded] = useState(false);
  const [fullHeight, setFullHeight] = useState(0);
  const animatedHeight = useSharedValue(0);
  const animatedOpacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: animatedHeight.value,
      opacity: animatedOpacity.value,
    };
  });

  useEffect(() => {
    setFullHeight(props.matchList.length * 160);
  }, [props.matchList]);

  /*React.useEffect(() => {
    if (expanded) {
      Animated.timing(animatedHeight, {
        duration: 200,
        toValue: fullHeight,
        useNativeDriver: true,
        easing: Easing.linear,
      }).start();
    } else {
      Animated.timing(animatedHeight, {
        duration: 200,
        toValue: 0,
        useNativeDriver: true,
        easing: Easing.linear,
      }).start();
    }
  }, [expanded]);*/

  useEffect(() => {
    animatedHeight.value = withTiming(expanded ? fullHeight : 0);
    animatedOpacity.value = withTiming(expanded ? 1 : 0);
  }, [expanded]);

  const createCouponMatchList = () => {
    return props.matchList.map((item, index) => {
      return <CouponMatchItem key={index} match={item} />;
    });
  };
  return (
    <View style={CouponItemStyles.mainView}>
      <TouchableOpacity
        style={CouponItemStyles.generalView}
        onPress={() => setExpanded(value => !value)}>
        <View style={CouponItemStyles.leftView}>
          <RegularText>Data zakładu</RegularText>
          <BigText>{props.dateAdd}</BigText>
          <RegularText>Wartość zakładu</RegularText>
          <BigText>{props.betAmount}</BigText>
        </View>
        <View style={CouponItemStyles.rightView}>
          <RegularText>Status</RegularText>
          <BigText>{props.status}</BigText>
          <RegularText>Wygrana</RegularText>
          <BigText>{props.winAmount}</BigText>
        </View>
        <View style={CouponItemStyles.expandArrowView}>
          <Image
            style={CouponItemStyles.expandArrow}
            source={icons.expandArrow}
            resizeMode={'contain'}
          />
        </View>
      </TouchableOpacity>
      {/*<Animated.View
        style={{
          height: animatedHeight,
          backgroundColor: 'red',
        }}
      />*/}
      <Animated.View
        style={[
          {
            justifyContent: 'space-between',
          },
          animatedStyle,
        ]}>
        {createCouponMatchList()}
      </Animated.View>
    </View>
  );
};

export default CouponItem;
