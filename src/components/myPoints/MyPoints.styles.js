import {StyleSheet} from 'react-native';
import AppColors from '../../colors';

const styles = StyleSheet.create({
  mainView: {
    alignSelf: 'flex-end',
    width: '45%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: AppColors.lightBlue,
    borderWidth: 1,
    borderColor: AppColors.lightBlue,
    borderTopLeftRadius: 30,
    height: 40,
    paddingRight: 10,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default styles;
