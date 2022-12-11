import React, {useContext, useState} from 'react';
import Background from '../components/background/Background';
import {LoggedOutHeader} from '../components/headers/MyHeaders';
import CustomScrollView from '../components/customScrollView/CustomScrollView';
import MyTextInput from '../components/myTextInput/MyTextInput';
import {
  AcceptButton,
  RegisterButton,
} from '../components/buttons/CustomButtons';
import {useNavigation} from '@react-navigation/native';
import useFetch from '../hooks/useFetch';
import ErrorContext from '../contexts/ErrorContext';

const RegisterScreen = () => {
  const [nick, setNick] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const navigation = useNavigation();
  const {fetchData} = useFetch();
  const {showError} = useContext(ErrorContext);

  const registerUser = () => {
    if (password !== passwordRepeat) {
      let error = {
        code: 1,
        message: 'Hasła nie są takie same',
      };
      showError(error);
      return;
    }
    if (password === '' || nick === '' || email === '') {
      let error = {
        code: 1,
        message: 'Uzupełnij wszystkie pola',
      };
      showError(error);
      return;
    }
    let postBody = {
      email: email,
      password: password,
      nick: nick,
    };

    const responseFetch = fetchData(
      async res => {
        console.log(res);
        navigation.navigate('Login');
      },
      'register',
      null,
      postBody,
    );
  };

  return (
    <Background>
      <LoggedOutHeader />
      <CustomScrollView>
        <MyTextInput
          label={'Nick'}
          updateValue={value => setNick(value)}
          value={nick}
        />
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
        <MyTextInput
          label={'Powtórz hasło'}
          updateValue={value => setPasswordRepeat(value)}
          value={passwordRepeat}
          secureTextEntry={true}
        />
        <RegisterButton onPress={() => registerUser()} />
        <AcceptButton onPress={() => navigation.goBack()} text={'Wróć'} />
      </CustomScrollView>
    </Background>
  );
};

export default RegisterScreen;
