import React, {useCallback, useState} from 'react';
import Background from '../components/background/Background';
import {LoggedInHeader} from '../components/headers/MyHeaders';
import LoggedInFooter from '../components/footer/LoggedInFooter';
import CustomScrollView from '../components/customScrollView/CustomScrollView';
import {
  BigText,
  CapitalizedText,
  RegularText,
} from '../components/texts/CustomTexts';
import {
  ActionAnswerButton,
  ActionButton,
} from '../components/buttons/CustomButtons';
import {useFocusEffect} from '@react-navigation/native';
import colors from '../colors';
import {RowPanel} from '../components/customPanels/CustomPanels';
import useFetch from '../hooks/useFetch';

const ActionListScreen = () => {
  const [actionList, setActionList] = useState([]);
  const [stage, setStage] = useState('actionList');
  const [decisionText, setDecisionText] = useState('');
  const [actionAnswerUrl, setActionAnswerUrl] = useState('');
  const [optionList, setOptionList] = useState([]);
  const {fetchData} = useFetch();

  useFocusEffect(
    useCallback(() => {
      const responseFetch = fetchData(
        res => {
          setActionList(res.data.actionList);
          setStage('actionList');
        },
        'actions',
        null,
        null,
      );
    }, []),
  );

  const executeAction = actionId => {
    const responseFetch = fetchData(
      res => {
        if (res.data.nextAction !== undefined) {
          if (res.data.answerType === 'answerList') {
            setActionAnswerUrl(res.data.nextActionUrl);
            setOptionList(res.data.optionList);
            setStage(res.data.answerType);
          }
          if (res.data.answerType === 'accept') {
            setActionAnswerUrl(res.data.nextActionUrl);
            setOptionList([res.data.option]);
            setStage(res.data.answerType);
          }
        }
        // setActionList(res.data.actionList);
      },
      `action/${actionId}`,
      null,
      null,
    );
  };

  const executeActionAnswer = id => {
    const responseFetch = fetchData(
      res => {
        setStage('actionList');
      },
      `action/${actionAnswerUrl}/${id}`,
      null,
      null,
    );
  };

  return (
    <Background>
      <LoggedInHeader />
      <CustomScrollView>
        {stage === 'actionList' && (
          <>
            <CapitalizedText>Akcje</CapitalizedText>
            {actionList.map((item, index) => {
              return (
                <ActionButton
                  text={item.label}
                  key={index}
                  onPress={() => executeAction(item.id)}
                />
              );
            })}
          </>
        )}
        {stage === 'answerList' && (
          <>
            <CapitalizedText>Podejmij decyzję</CapitalizedText>
            {optionList.map((item, index) => {
              return (
                <ActionAnswerButton
                  key={index}
                  onPress={() => executeActionAnswer(item.id)}>
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
                  {item.ability_type !== undefined && (
                    <>
                      <RowPanel>
                        <BigText style={{color: colors.dark}}>
                          Umiejętność
                        </BigText>
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
                    </>
                  )}
                </ActionAnswerButton>
              );
            })}
            <ActionButton
              text={'Rezygnuję'}
              onPress={() => setStage('actionList')}
            />
          </>
        )}
        {stage === 'accept' && (
          <>
            <CapitalizedText>Podejmij decyzję</CapitalizedText>
            {optionList.map((item, index) => {
              return (
                <ActionAnswerButton
                  key={index}
                  onPress={() => executeActionAnswer(item.amount)}>
                  <RowPanel>
                    <RegularText style={{color: colors.dark}}>
                      {item.type}
                    </RegularText>
                    <RegularText style={{color: colors.dark}}>
                      Ilość: {item.amount}
                    </RegularText>
                    <RegularText style={{color: colors.dark}}>
                      Koszt: {item.cost}
                    </RegularText>
                  </RowPanel>
                </ActionAnswerButton>
              );
            })}
            <ActionButton
              text={'Rezygnuję'}
              onPress={() => setStage('actionList')}
            />
          </>
        )}
      </CustomScrollView>
      <LoggedInFooter />
    </Background>
  );
};

export default ActionListScreen;
