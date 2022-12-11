import {StyleSheet} from 'react-native';
import AppColors from '../../colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.dark,
    padding: 10,
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 20,
  },
  labelView: {
    justifyContent: 'center',
    marginBottom: 5,
  },
  textInputView: {
    borderBottomColor: AppColors.lightBlue,
    borderBottomWidth: 1,
    justifyContent: 'center',
    borderRadius: 10,
  },
  textInput: {
    borderBottomColor: AppColors.lightBlue,
    borderBottomWidth: 1,
    color: AppColors.light,
    fontSize: 20,
  },
});

export default styles;
