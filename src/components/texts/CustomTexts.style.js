import {StyleSheet} from 'react-native';
import AppColors from '../../colors';

const styles = StyleSheet.create({
  regularText: {
    fontSize: 14,
    color: AppColors.light,
  },
  smallText: {
    fontSize: 10,
    color: AppColors.light,
    fontStyle: 'italic',
  },
  headerText: {
    fontSize: 30,
    color: AppColors.light,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 5,
  },
  bigText: {
    fontSize: 18,
    color: AppColors.light,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  capitalizedText: {
    fontSize: 14,
    color: AppColors.light,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  myPointsText: {
    fontSize: 16,
    color: AppColors.dark,
  },
});

export default styles;
