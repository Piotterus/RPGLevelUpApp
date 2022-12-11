import {StyleSheet} from 'react-native';
import AppColors from '../../colors';

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView: {
    backgroundColor: AppColors.dark,
    paddingVertical: 20,
    paddingHorizontal: 20,
    height: 400,
    borderRadius: 30,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  item: {
    mainView: {
      marginVertical: 5,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
  },
});

export default styles;
