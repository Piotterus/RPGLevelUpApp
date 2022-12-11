import React, {useContext, useEffect} from 'react';
import AuthContext from '../contexts/AuthContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {HeaderText} from '../components/texts/CustomTexts';
import DrawerNav from './DrawerNav';
import StackNav from './StackNav';
import ErrorModal from '../components/errorModal/ErrorModal';
import Activity from '../components/activity/Activity';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast, {ErrorToast, SuccessToast} from 'react-native-toast-message';

const AppStacks = () => {
  const {
    isSettingUp,
    setIsSettingUp,
    isLoggedIn,
    isLoading,
    setToken,
    setIsLoggedIn,
    login,
    logout,
  } = useContext(AuthContext);

  /*
  1. Create the config
*/
  const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: props => (
      <SuccessToast
        {...props}
        text1Style={{
          fontSize: 20,
        }}
      />
    ),
    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
    error: props => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 20,
        }}
      />
    ),
  };

  useEffect(() => {
    const setup = async () => {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      const token = await AsyncStorage.getItem('token');
      // console.log(`isLoggedIn: ${isLoggedIn}`);
      if (isLoggedIn !== '1') {
        setIsSettingUp(false);
      } else {
        // console.log('Ustawienie tokena: ' + token);
        // await setToken(token);
        // await setIsLoggedIn(true);
        await setIsSettingUp(false);
        login(token);
      }
    };
    setup();
  }, []);

  if (isSettingUp) {
    return (
      <SafeAreaProvider>
        <HeaderText style={{color: 'black'}}>SplashScreen</HeaderText>
      </SafeAreaProvider>
    );
  }
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <NavigationContainer>
          {isLoggedIn ? <DrawerNav /> : <StackNav />}
        </NavigationContainer>
        <ErrorModal />
        {isLoading && <Activity />}
        <Toast visibilityTime={1000} config={toastConfig} />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default AppStacks;
