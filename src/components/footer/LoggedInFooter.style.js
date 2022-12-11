import {StyleSheet} from 'react-native';
import AppColors from '../../colors';

const styles = StyleSheet.create({
  mainView: {
    padding: 10,
    backgroundColor: AppColors.dark,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  panel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    backgroundColor: AppColors.lightBlue,
    width: 1,
    height: '100%',
  },
});

export default styles;
