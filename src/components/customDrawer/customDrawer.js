import React, {useContext} from 'react';
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import icons from '../../icons/icons';
import customDrawerStyles from './customDrawer.styles';
import UserContext from '../../contexts/UserContext';
import AuthContext from '../../contexts/AuthContext';

Icon.loadFont();

const CustomDrawer = props => {
  const navigation = useNavigation();
  const {nick} = useContext(UserContext);
  const {setIsLoggedIn, logout} = useContext(AuthContext);
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <SafeAreaView>
        <View style={customDrawerStyles.mainView}>
          <TouchableOpacity
            style={customDrawerStyles.closeIcon}
            onPress={() => props.navigation.closeDrawer()}>
            <Icon name={'x'} size={36} />
          </TouchableOpacity>
          <Text style={customDrawerStyles.loggedText}>Zalogowany</Text>
          <Text style={customDrawerStyles.userText}>{nick}</Text>
          <View style={customDrawerStyles.drawerLine} />
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={customDrawerStyles.drawerItem}>
            <Text style={customDrawerStyles.drawerItemText}>Home</Text>
          </TouchableOpacity>
          <View style={customDrawerStyles.drawerLine} />
          <TouchableOpacity
            onPress={() => navigation.navigate('ActionList')}
            style={customDrawerStyles.drawerItem}>
            <Text style={customDrawerStyles.drawerItemText}>Akcje</Text>
          </TouchableOpacity>
          <View style={customDrawerStyles.drawerLine} />
          <TouchableOpacity
            onPress={() => navigation.navigate('ClientList')}
            style={customDrawerStyles.drawerItem}>
            <Text style={customDrawerStyles.drawerItemText}>Klienci</Text>
          </TouchableOpacity>
          <View style={customDrawerStyles.drawerLine} />
          <View style={customDrawerStyles.fillerView} />
          <TouchableOpacity
            onPress={() => logout()}
            style={customDrawerStyles.logoutView}>
            <Text style={customDrawerStyles.logoutText}>Wyloguj</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={customDrawerStyles.logoutView}
            /*onPress={() => navigation.navigate('DeleteAccount')}*/
          >
            <Text style={customDrawerStyles.logoutText}>Usuń konto</Text>
          </TouchableOpacity>
          <Image style={customDrawerStyles.logo} source={icons.logo} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CustomDrawer;
