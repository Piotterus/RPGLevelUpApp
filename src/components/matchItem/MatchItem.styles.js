import {StyleSheet} from 'react-native';
import AppColors from '../../colors';

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: AppColors.dark,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.lightBlue,
    paddingVertical: 10,
  },
  deleteView: {
    alignItems: 'flex-end',
    paddingRight: 15,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  scoreView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  betView: {
    backgroundColor: AppColors.dark,
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: AppColors.lightBlue,
    paddingVertical: 10,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  active: {
    backgroundColor: AppColors.lightBlueOpacity,
  },
  teamNameView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  couponModal: {
    touchable: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    mainView: {
      backgroundColor: AppColors.dark,
      paddingVertical: 20,
      paddingHorizontal: 20,
      height: 400,
      borderRadius: 30,
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
    },
    bottomView: {
      flexDirection: 'row',
      flex: 4,
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    columnView: {
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    firstColumn: {
      alignItems: 'center',
      flex: 3,
    },
    lastColumn: {
      alignItems: 'flex-start',
      flex: 1,
    },
    bigText: {
      flex: 1,
    },
    acceptButton: {
      width: '100%',
    },
  },
  myType: {
    mainView: {
      borderColor: AppColors.lightBlue,
      borderWidth: 1,
      padding: 5,
      minWidth: 100,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
  },
  betGoals: {
    button: {
      backgroundColor: AppColors.lightBlue,
      padding: 5,
      minWidth: 100,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    text: {
      color: AppColors.dark,
    },
  },
});

export default styles;
