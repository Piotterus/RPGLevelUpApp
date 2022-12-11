import {StyleSheet} from 'react-native';
import AppColors from '../../colors';

const styles = StyleSheet.create({
  loginButton: {
    container: {
      backgroundColor: AppColors.light,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      height: 60,
      marginVertical: 10,
      width: '100%',
    },
    text: {
      color: AppColors.dark,
    },
  },
  acceptButton: {
    container: {
      backgroundColor: AppColors.light,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      height: 60,
      marginVertical: 10,
      //marginHorizontal: 10,
      width: '100%',
    },
    text: {
      color: AppColors.dark,
    },
  },
  actionButton: {
    container: {
      backgroundColor: AppColors.lightBlue,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      height: 50,
      marginVertical: 10,
      marginHorizontal: 10,
      width: '100%',
    },
    text: {
      color: AppColors.dark,
    },
  },
  actionAnswerButton: {
    container: {
      backgroundColor: AppColors.lightBlue,
      justifyContent: 'center',

      borderRadius: 30,
      marginVertical: 10,
      marginHorizontal: 10,
      padding: 20,
      width: '100%',
    },
  },
});

export default styles;
