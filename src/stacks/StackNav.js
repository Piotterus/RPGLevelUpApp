import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import RemindPasswordScreen from '../screens/RemindPasswordScreen';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}>
      <>
        <Stack.Screen
          name={'Login'}
          option={{
            title: 'Login',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            gestureEnabled: false,
          }}>
          {props => <LoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name={'Register'}
          option={{
            title: 'Login',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            gestureEnabled: false,
          }}>
          {props => <RegisterScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name={'Remind'}
          option={{
            title: 'Login',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            gestureEnabled: false,
          }}>
          {props => <RemindPasswordScreen {...props} />}
        </Stack.Screen>
      </>
    </Stack.Navigator>
  );
};

export default StackNav;
