import React, {useCallback, useState} from 'react';
import Background from '../components/background/Background';
import {LoggedInHeader} from '../components/headers/MyHeaders';
import LoggedInFooter from '../components/footer/LoggedInFooter';
import CustomScrollView from '../components/customScrollView/CustomScrollView';
import useFetch from '../hooks/useFetch';
import {useFocusEffect} from '@react-navigation/native';
import {RowPanel} from '../components/customPanels/CustomPanels';
import {CapitalizedText, RegularText} from '../components/texts/CustomTexts';
import colors from '../colors';

const ClientListScreen = () => {
  const [clientList, setClientList] = useState([]);
  const {fetchData} = useFetch();

  useFocusEffect(
    useCallback(() => {
      const responseFetch = fetchData(
        res => {
          setClientList(res.data.clientList);
        },
        'clients',
        null,
        null,
      );
    }, []),
  );

  return (
    <Background>
      <LoggedInHeader />
      <CustomScrollView>
        <CapitalizedText>Klienci</CapitalizedText>
        {clientList.map((item, index) => {
          return (
            <RowPanel
              key={index}
              style={{
                backgroundColor: colors.light,
                paddingVertical: 10,
                borderRadius: 10,
              }}>
              {item.type === 'NEEDS' && (
                <RegularText style={{color: colors.dark}}>
                  Wymagania: {item.needs}
                </RegularText>
              )}
              {item.type === 'PRIZE' && (
                <RegularText style={{color: colors.dark}}>
                  Max Cena: {item.max_prize}
                </RegularText>
              )}
            </RowPanel>
          );
        })}
      </CustomScrollView>
      <LoggedInFooter />
    </Background>
  );
};

export default ClientListScreen;
