import {StyleSheet} from 'react-native';
import AppColors from '../../colors';

const styles = StyleSheet.create({
  loggedOutView: {
    backgroundColor: AppColors.dark,
    height: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  loggedInHeader: {
    container: {
      backgroundColor: AppColors.dark,
      height: 100,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    burger: {
      height: 40,
    },
    pitch: {
      height: 40,
    },
    pokerChips: {
      height: 40,
    },
    couponBadge: {
      position: 'absolute',
      backgroundColor: AppColors.lightBlue,
      width: 20,
      height: 20,
      borderRadius: 10,
      right: 5,
      top: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    couponBadgeText: {
      color: AppColors.dark,
    },
    midView: {
      flexDirection: 'row',
    },
  },
});

export default styles;
