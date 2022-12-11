import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {BigText, RegularText} from '../texts/CustomTexts';
import LeaguesScrollStyles from './LeaguesScroll.styles';

const LeaguesScroll = props => {
  const createLeaguesList = () => {
    return props.list.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={[
            LeaguesScrollStyles.leagueView,
            props.active === item.id ? LeaguesScrollStyles.active : '',
          ]}
          onPress={() => {
            props.setActive(item.id !== props.active ? item.id : undefined);
          }}>
          <RegularText>{item.name}</RegularText>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={LeaguesScrollStyles.mainView}>
      <ScrollView
        style={LeaguesScrollStyles.scroll}
        contentContainerStyle={LeaguesScrollStyles.containerScroll}
        horizontal={true}>
        {createLeaguesList()}
      </ScrollView>
    </View>
  );
};

export default LeaguesScroll;
