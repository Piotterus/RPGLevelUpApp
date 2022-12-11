import {StyleSheet} from 'react-native';
import AppColors from '../../colors';
import colors from '../../colors';

const styles = StyleSheet.create({
  rowPanel: {
    mainView: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical: 10,
    },
  },
  statsPanel: {
    mainView: {
      flex: 1,
      backgroundColor: colors.dark,
      justifyContent: 'space-around',
      alignItems: 'center',
      marginHorizontal: 5,
      height: 90,
      paddingTop: 5,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: colors.dark,
    },
    touchable: {
      borderColor: colors.greenIcon,
    },
  },
});

export default styles;
