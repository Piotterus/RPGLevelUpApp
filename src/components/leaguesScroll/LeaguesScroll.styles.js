import {StyleSheet} from 'react-native';
import AppColors from '../../colors';

const styles = StyleSheet.create({
  mainView: {
    height: 60,
  },
  scroll: {
    backgroundColor: AppColors.lightBlue,
  },
  containerScroll: {
    flexGrow: 1,
  },
  leagueView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.darkOpacity,
    borderRadius: 25,
    width: 120,
    margin: 5,
  },
  active: {
    backgroundColor: AppColors.dark,
  },
});

export default styles;
