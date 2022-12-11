import {StyleSheet} from 'react-native';
import AppColors from '../../colors';

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  errorView: {
    backgroundColor: AppColors.light,
    height: 160,
    width: '80%',
    paddingHorizontal: 5,
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  okButton: {
    borderTopColor: '#000000',
    borderTopWidth: 1,
    width: '90%',
  },
  okText: {
    color: AppColors.dark,
    alignSelf: 'center',
    paddingTop: 10,
  },
  errorText: {
    color: AppColors.dark,
    paddingTop: 10,
  },
});

export default styles;
