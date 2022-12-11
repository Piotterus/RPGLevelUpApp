import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './CustomPanels.style';
import {RegularText} from '../texts/CustomTexts';

export const RowPanel = props => {
  return (
    <View style={[styles.rowPanel.mainView, props.style]}>
      {props.children}
    </View>
  );
};

export const StatsPanel = props => {
  return (
    <TouchableOpacity
      {...props}
      disabled={!props.onPress}
      style={[
        styles.statsPanel.mainView,
        props.onPress ? styles.statsPanel.touchable : '',
      ]}>
      <RegularText>{props.label}</RegularText>
      <RowPanel>{props.children}</RowPanel>
    </TouchableOpacity>
  );
};
