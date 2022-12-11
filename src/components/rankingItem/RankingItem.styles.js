import {StyleSheet} from 'react-native';
import AppColors from '../../colors';

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: AppColors.dark,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.lightBlue,
  },
  placeText: {
    flex: 1,
  },
  playerText: {
    flex: 3,
  },
  achievementText: {
    flex: 2,
  },
  pointsText: {
    flex: 1,
    textAlign: 'right',
  },
});

export default styles;
