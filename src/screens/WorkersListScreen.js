import React, {useCallback, useState} from 'react';
import Background from '../components/background/Background';
import LoggedInFooter from '../components/footer/LoggedInFooter';
import {LoggedInHeader} from '../components/headers/MyHeaders';
import CustomScrollView from '../components/customScrollView/CustomScrollView';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {ActionAnswerButton} from '../components/buttons/CustomButtons';
import {RowPanel} from '../components/customPanels/CustomPanels';
import {BigText, RegularText} from '../components/texts/CustomTexts';
import colors from '../colors';

const WorkersListScreen = () => {
  const [workersList, setWorkersList] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();

  useFocusEffect(
    useCallback(() => {
      setWorkersList(route.params.workersList);
    }, [route.params]),
  );

  return (
    <Background>
      <LoggedInHeader />
      <CustomScrollView>
        {workersList.map((item, index) => {
          return (
            <ActionAnswerButton key={index}>
              <RowPanel>
                <RegularText style={{color: colors.dark}}>
                  {item.type}
                </RegularText>
                <RegularText style={{color: colors.dark}}>
                  Punkty: {item.points}
                </RegularText>
                <RegularText style={{color: colors.dark}}>
                  Koszt: {item.cost}
                </RegularText>
              </RowPanel>
              <RowPanel>
                <BigText style={{color: colors.dark}}>Umiejętność</BigText>
              </RowPanel>
              <RowPanel>
                <RegularText style={{color: colors.dark}}>
                  {item.ability_type}
                </RegularText>
                <RegularText style={{color: colors.dark}}>
                  Siła: {item.ability_value}
                </RegularText>
                <RegularText style={{color: colors.dark}}>
                  Czas: {item.ability_time}
                </RegularText>
              </RowPanel>
            </ActionAnswerButton>
          );
        })}
      </CustomScrollView>
      <LoggedInFooter />
    </Background>
  );
};

export default WorkersListScreen;
