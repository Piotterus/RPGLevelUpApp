import {StyleSheet} from 'react-native';
import AppColors from '../../colors';

const styles = StyleSheet.create({
  mainView: {
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // backgroundColor: AppColors.light,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    // height: 40,
  },
  betGoals: {
    mainView: {
      alignSelf: 'flex-start',
      width: '45%',
      alignItems: 'flex-start',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: AppColors.lightBlue,
      borderTopRightRadius: 30,
      backgroundColor: AppColors.lightBlue,
      height: 40,
      paddingLeft: 10,
    },
    text: {
      textAlign: 'left',
    },
  },
});

export default styles;
