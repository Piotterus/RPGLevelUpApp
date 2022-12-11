import React, {useContext, useState} from 'react';
import {Text, View} from 'react-native';
import Background from '../components/background/Background';
import {LoggedOutHeader} from '../components/headers/MyHeaders';
import MyTextInput from '../components/myTextInput/MyTextInput';
import {
  AcceptButton,
  LoginButton,
  RegisterButton,
} from '../components/buttons/CustomButtons';
import CustomScrollView from '../components/customScrollView/CustomScrollView';
import {useNavigation} from '@react-navigation/native';
import {BigText} from '../components/texts/CustomTexts';
import AuthContext from '../contexts/AuthContext';
import useFetch from '../hooks/useFetch';
import UserContext from '../contexts/UserContext';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const {setIsLoggedIn, setToken, login} = useContext(AuthContext);
  const {setNick} = useContext(UserContext);
  const {fetchData} = useFetch();

  const loginUser = () => {
    let loginBody = email;
    let passwordBody = password;
    if (__DEV__) {
      if (email === '') {
        loginBody = 'piotr.katanski@verbum.com.pl'; //'test@verbum.com.pl';
      }
      if (password === '') {
        passwordBody = 'che7Ngee'; //'TestTest';
      }
    }
    let postBody = {
      email: loginBody,
      password: passwordBody,
    };

    const responseFetch = fetchData(
      async res => {
        // await setToken(res.user.token);
        await setNick(res.user.nick);
        // await setIsLoggedIn(true);
        login(res.user.token);
      },
      'login',
      null,
      postBody,
    );
  };

  return (
    <Background>
      <LoggedOutHeader />
      <CustomScrollView>
        <MyTextInput
          label={'E-mail'}
          updateValue={value => setEmail(value)}
          value={email}
        />
        <MyTextInput
          label={'Hasło'}
          updateValue={value => setPassword(value)}
          value={password}
          secureTextEntry={true}
        />
        <LoginButton onPress={() => loginUser()} />
        <BigText>Nie masz konta?</BigText>
        <RegisterButton onPress={() => navigation.navigate('Register')} />
        <BigText>Zapomniałeś hasła?</BigText>
        <AcceptButton
          onPress={() => navigation.navigate('Remind')}
          text={'Zresetuj hasło'}
        />
      </CustomScrollView>
    </Background>
  );
};

export default LoginScreen;
