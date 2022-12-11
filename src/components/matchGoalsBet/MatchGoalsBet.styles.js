import {StyleSheet} from 'react-native';
import AppColors from '../../colors';

const styles = StyleSheet.create({
  mainView: {},
  elementView: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 5,
  },
  teamView: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: AppColors.lightBlue,
    textAlign: 'center',
    minWidth: 100,
    fontSize: 20,
    color: AppColors.light,
  },
  button: {
    marginTop: 20,
  },
});

export default styles;
