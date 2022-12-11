import {StyleSheet} from 'react-native';
import AppColors from '../../colors';

const styles = StyleSheet.create({
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
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: AppColors.lightBlue,
    textAlign: 'center',
    width: '90%',
    fontSize: 20,
    color: AppColors.light,
  },
});

export default styles;
