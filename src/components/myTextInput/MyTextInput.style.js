import {StyleSheet} from 'react-native';
import AppColors from '../../colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.dark,
    padding: 10,
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 20,
    width: '100%',
  },
  labelView: {
    justifyContent: 'center',
    marginBottom: 5,
  },
  textInputView: {
    borderColor: AppColors.lightBlue,
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 10,
  },
  textInput: {
    color: AppColors.light,
    fontSize: 20,
  },
});

export default styles;
