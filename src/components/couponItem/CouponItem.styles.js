import {StyleSheet} from 'react-native';
import AppColors from '../../colors';

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: AppColors.dark,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.lightBlue,
    paddingHorizontal: 5,
  },
  betAmountView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  generalView: {
    flexDirection: 'row',
  },
  leftView: {
    flex: 1,
    alignItems: 'center',
  },
  rightView: {
    flex: 1,
    alignItems: 'center',
  },
  expandArrowView: {
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  expandArrow: {
    width: 20,
  },
  matchView: {
    mainView: {
      height: 160,
      backgroundColor: AppColors.dark,
      borderBottomWidth: 1,
      borderBottomColor: AppColors.lightBlue,
      paddingVertical: 5,
    },
    teamVersusView: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    betView: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    teamNameView: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    scoreView: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    imageStatus: {
      height: '50%',
    },
  },
});

export default styles;
