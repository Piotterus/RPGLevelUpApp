import {StyleSheet} from 'react-native';
import AppColors from '../../colors';

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    backgroundColor: AppColors.light,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  avatarIcon: {},
  loggedText: {
    fontSize: 12,
    color: AppColors.dark,
    marginVertical: 5,
  },
  userText: {
    fontSize: 18,
    color: AppColors.dark,
    textTransform: 'uppercase',
    marginVertical: 5,
    marginBottom: 30,
  },
  drawerLine: {
    borderWidth: 0.5,
    borderColor: AppColors.dark,
    width: '100%',
  },
  drawerItem: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerItemText: {
    fontSize: 14,
    color: AppColors.dark,
    textTransform: 'uppercase',
  },
  fillerView: {
    flex: 1,
  },
  logoutView: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 14,
    color: AppColors.lightBlue,
    textTransform: 'uppercase',
  },
  logo: {},
});

export default styles;
