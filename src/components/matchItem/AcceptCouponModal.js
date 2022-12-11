import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackComponent,
  View,
} from 'react-native';
import {BigText, RegularText} from '../texts/CustomTexts';
import MatchItemStyles from './MatchItem.styles';
import Slider from '@react-native-community/slider';
import AppColors from '../../colors';
import MyTextInput from '../myTextInput/MyTextInput';
import BetTextInput from '../betTextInput/BetTextInput';
import {AcceptButton} from '../buttons/CustomButtons';

const AcceptCouponModal = props => {
  const [isSliding, setIsSliding] = useState(false);

  return (
    <Modal isVisible={props.visible} onBackdropPress={props.closeModal}>
      <View style={MatchItemStyles.couponModal.mainView}>
        <BigText>Ustal stawkę</BigText>
        <Slider
          minimumValue={props.minBet}
          maximumValue={props.maxBet}
          step={0.01}
          onSlidingStart={() => {
            setIsSliding(true);
          }}
          onSlidingComplete={value => {
            props.setBetValue(Math.round((value + Number.EPSILON) * 100) / 100);
            setIsSliding(false);
          }}
          onValueChange={value => {
            if (isSliding) {
              props.setBetValue(
                Math.round((value + Number.EPSILON) * 100) / 100,
              );
            }
          }}
          style={{flex: 1, width: 200}}
          minimumTrackTintColor={AppColors.lightBlue}
          maximumTrackTintColor={AppColors.lightBlue}
          value={parseFloat(props.betValue)}
        />
        <View style={MatchItemStyles.couponModal.bottomView}>
          <BigText
            style={[
              MatchItemStyles.couponModal.bigText,
              MatchItemStyles.couponModal.firstColumn,
            ]}>
            Stawka:
          </BigText>
          <BetTextInput
            style={[
              MatchItemStyles.couponModal.bigText,
              MatchItemStyles.couponModal.lastColumn,
            ]}
            updateValue={value => {
              value = value.toString().replace(',', '.');
              if (value === '' || value === undefined) {
                value = 0;
              }
              props.setBetValue(value);
            }}
            value={props.betValue}
          />
        </View>
        <View style={MatchItemStyles.couponModal.bottomView}>
          <BigText
            style={[
              MatchItemStyles.couponModal.bigText,
              MatchItemStyles.couponModal.firstColumn,
            ]}>
            Łączny kurs:
          </BigText>
          <BigText
            style={[
              MatchItemStyles.couponModal.bigText,
              MatchItemStyles.couponModal.lastColumn,
            ]}>
            {Math.round((props.multiplier() + Number.EPSILON) * 100) / 100}
          </BigText>
        </View>
        <View style={MatchItemStyles.couponModal.bottomView}>
          <BigText
            style={[
              MatchItemStyles.couponModal.bigText,
              MatchItemStyles.couponModal.firstColumn,
            ]}>
            Potencjalna wygrana:
          </BigText>
          <BigText
            style={[
              MatchItemStyles.couponModal.bigText,
              MatchItemStyles.couponModal.lastColumn,
            ]}>
            {Math.round(
              (props.multiplier() * props.betValue + Number.EPSILON) * 100,
            ) / 100}
          </BigText>
        </View>
        <View style={MatchItemStyles.couponModal.bottomView}>
          <AcceptButton
            style={MatchItemStyles.couponModal.acceptButton}
            text={'Zaakceptuj'}
            onPress={() => props.onAccept()}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AcceptCouponModal;
