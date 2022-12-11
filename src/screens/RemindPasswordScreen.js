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

const RemindPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const {fetchData} = useFetch();
  const {showError} = useContext(ErrorContext);

  const remindPassword = () => {
    if (email === '') {
      let error = {
        code: 1,
        message: 'Uzupełnij email',
      };
      showError(error);
      return;
    }
    let postBody = {
      email: email,
    };

    const responseFetch = fetchData(
      async res => {
        console.log(res);
        navigation.navigate('Login');
      },
      'remind-password',
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
        <AcceptButton
          onPress={() => remindPassword()}
          text={'Zresetuj hasło'}
        />
        <AcceptButton onPress={() => navigation.goBack()} text={'Wróć'} />
      </CustomScrollView>
    </Background>
  );
};

export default RemindPasswordScreen;
