import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {TouchableWithoutFeedback, View} from 'react-native';
import AchievementsModalStyles from './AchievementsModal.styles';
import {RegularText, SmallText} from '../texts/CustomTexts';
import CustomScrollView from '../customScrollView/CustomScrollView';
import Icon from 'react-native-vector-icons/Feather';
import AppColors from '../../colors';

const AchievementItem = props => {
  return (
    <View style={AchievementsModalStyles.item.mainView}>
      <View style={AchievementsModalStyles.item.header}>
        <RegularText>{props.name}</RegularText>
        {/*<RegularText>{props.value}</RegularText>*/}
      </View>
      <SmallText>{props.description}</SmallText>
    </View>
  );
};

const AchievementsModal = props => {
  const createAchievementsList = () => {
    let achievementsList = [];
    if (props.achievements) {
      props?.achievements?.forEach((item, index) => {
        achievementsList.push(
          <AchievementItem
            name={item.name}
            value={item.value}
            description={item.description}
            key={index}
          />,
        );
      });
    }
    return achievementsList;
  };

  return (
    <Modal isVisible={props.visible}>
      {/*<TouchableWithoutFeedback onPress={props.closeModal}>*/}
      <View style={AchievementsModalStyles.touchable}>
        <Icon
          name={'x'}
          size={60}
          color={AppColors.light}
          onPress={props.closeModal}
          style={AchievementsModalStyles.closeIcon}
        />
        <View
          style={AchievementsModalStyles.mainView}
          // pointerEvents={'box-none'}
          // onStartShouldSetResponder={() => true}
        >
          <CustomScrollView>{createAchievementsList()}</CustomScrollView>
        </View>
      </View>
      {/*</TouchableWithoutFeedback>*/}
    </Modal>
  );
};

export default AchievementsModal;
