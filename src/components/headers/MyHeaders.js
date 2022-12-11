import React, {useContext} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Icons from '../../icons/icons';

import myHeadersStyle from './MyHeaders.style';
import {BigText, HeaderText, RegularText} from '../texts/CustomTexts';
import {useNavigation} from '@react-navigation/native';
import userContext from '../../contexts/UserContext';

export const LoggedOutHeader = () => {
  return (
    <View style={myHeadersStyle.loggedOutView}>
      <HeaderText>RPG LevelUp</HeaderText>
    </View>
  );
};

export const LoggedInHeader = () => {
  const navigation = useNavigation();
  const {coupon} = useContext(userContext);

  return (
    <View style={myHeadersStyle.loggedInHeader.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          source={Icons.burger}
          style={myHeadersStyle.loggedInHeader.burger}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={myHeadersStyle.loggedInHeader.midView}
        onPress={() => navigation.navigate('Home')}>
        <HeaderText>RPG LevelUp</HeaderText>
      </TouchableOpacity>
    </View>
  );
};
