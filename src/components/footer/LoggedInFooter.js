import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {RegularText} from '../texts/CustomTexts';
import LoggedInFooterStyle from './LoggedInFooter.style';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const FooterPanel = props => {
  return (
    <TouchableOpacity style={LoggedInFooterStyle.panel} onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
};

const FooterDivider = () => {
  return <View style={LoggedInFooterStyle.divider} />;
};

const LoggedInFooter = () => {
  const navigation = useNavigation();

  return (
    <View style={LoggedInFooterStyle.mainView}>
      <FooterPanel onPress={() => navigation.navigate('Home')}>
        <RegularText>Home</RegularText>
      </FooterPanel>
      <FooterDivider />
      <FooterPanel onPress={() => navigation.navigate('ActionList')}>
        <RegularText>Akcje</RegularText>
      </FooterPanel>
      <FooterDivider />
      <FooterPanel onPress={() => navigation.navigate('ClientList')}>
        <RegularText>Klienci</RegularText>
      </FooterPanel>
      {/*<FooterDivider />
      <FooterPanel onPress={() => navigation.navigate('Ranking')}>
        <RegularText>Ranking</RegularText>
      </FooterPanel>*/}
    </View>
  );
};

export default LoggedInFooter;
