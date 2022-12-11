import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import MatchListScreen from '../screens/MatchListScreen';
import CouponListScreen from '../screens/CouponListScreen';
import CurrentCouponScreen from '../screens/CurrentCouponScreen';
import RankingScreen from '../screens/RankingScreen';
import CustomDrawer from '../components/customDrawer/customDrawer';
import MatchScreen from '../screens/MatchScreen';
import MatchHistoryScreen from '../screens/MatchHistoryScreen';
import QuestionListScreen from '../screens/QuestionListScreen';
import ActionListScreen from '../screens/ActionListScreen';
import WorkersListScreen from '../screens/WorkersListScreen';
import UpgradesListScreen from '../screens/UpgradesListScreen';
import ClientListScreen from '../screens/ClientListScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}
      defaultStatus={'closed'}
      backBehavior={'history'}
      drawerContent={props => <CustomDrawer {...props} />}>
      <>
        <Drawer.Screen name={'Home'}>
          {props => <HomeScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={'MatchList'}>
          {props => <MatchListScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={'Match'}>
          {props => <MatchScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={'CouponList'}>
          {props => <CouponListScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={'CurrentCoupon'}>
          {props => <CurrentCouponScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={'Ranking'}>
          {props => <RankingScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={'MatchHistoryList'}>
          {props => <MatchHistoryScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={'QuestionList'}>
          {props => <QuestionListScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={'ActionList'}>
          {props => <ActionListScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={'WorkersList'}>
          {props => <WorkersListScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={'UpgradesList'}>
          {props => <UpgradesListScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={'ClientList'}>
          {props => <ClientListScreen {...props} />}
        </Drawer.Screen>
      </>
    </Drawer.Navigator>
  );
};

export default DrawerNav;
