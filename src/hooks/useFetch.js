import React, {useContext} from 'react';
import ApiContext from '../contexts/ApiContext';
import ErrorContext from '../contexts/ErrorContext';
import AuthContext from '../contexts/AuthContext';
import UserContext from '../contexts/UserContext';
import Toast from 'react-native-toast-message';

const UseFetch = () => {
  const {apiUrl, apiKey} = useContext(ApiContext);
  const {token, isLoading, setIsLoading} = useContext(AuthContext);
  const defaultError = {
    code: '1',
    message: 'Wystąpił niespodziewany błąd',
  };
  const {errorModalVisible, setErrorModalVisible, error, setError, showError} =
    useContext(ErrorContext);

  const objToQueryString = obj => {
    const keyValuePairs = [];
    for (const key in obj) {
      keyValuePairs.push(
        encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]),
      );
    }
    return keyValuePairs.join('&');
  };

  const showToast = text => {
    Toast.show({
      type: 'success',
      text1: text,
    });
  };

  const queryString = data =>
    objToQueryString({...data, key: apiKey, token: token});

  const fetchData = async (callback, endPoint, getData, postData = null) => {
    setIsLoading(true);
    let body = postData;
    let url = `${apiUrl}${endPoint}?${queryString(getData)}`;
    let options;
    if (postData === null) {
      options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
    } else {
      options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      };
    }
    try {
      let response = await fetch(url, options);
      //if (response.ok) {
      let responseJson = await response.json();
      console.log(responseJson);
      if (responseJson.error.code !== 0) {
        console.log('Error zapytania');
        showError(responseJson.error);
      } else {
        if (responseJson.info !== undefined && responseJson?.info?.code !== 0) {
          console.log(responseJson?.info);
          showToast(responseJson?.info.message);
          // showError(responseJson?.info);
        }
        callback(responseJson);
      }
      // } else {
      //   console.log('ThrowError');
      //   throw defaultError;
      // }
    } catch (e) {
      console.log(e);
      console.log('Error zapytania');
      showError(defaultError);
    }
    setIsLoading(false);
    return null;
  };

  return {fetchData};
};

export default UseFetch;
