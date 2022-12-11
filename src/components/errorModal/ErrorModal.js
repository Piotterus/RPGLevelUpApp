import React, {useContext, useEffect} from 'react';
import Modal from 'react-native-modal';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ErrorContext from '../../contexts/ErrorContext';
import {BigText, RegularText} from '../texts/CustomTexts';
import ErrorModalStyles from './ErrorModal.styles';

const ErrorModal = props => {
  const {errorModalVisible, setErrorModalVisible, error, setError, clearError} =
    useContext(ErrorContext);

  return (
    <Modal isVisible={errorModalVisible} style={ErrorModalStyles.modal}>
      <TouchableWithoutFeedback onPress={() => clearError()} style={{flex: 1}}>
        <View style={ErrorModalStyles.mainView}>
          <View style={ErrorModalStyles.errorView}>
            <RegularText style={ErrorModalStyles.errorText}>
              {error?.message}
            </RegularText>
            <TouchableOpacity
              style={ErrorModalStyles.okButton}
              onPress={() => clearError()}>
              <RegularText style={ErrorModalStyles.okText}>OK</RegularText>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ErrorModal;
