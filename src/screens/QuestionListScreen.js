import React, {useCallback, useState} from 'react';
import Background from '../components/background/Background';
import {LoggedInHeader} from '../components/headers/MyHeaders';
import PointsFooter from '../components/pointsFooter/PointsFooter';
import CustomScrollView from '../components/customScrollView/CustomScrollView';
import {
  BigText,
  CapitalizedText,
  HeaderText,
  RegularText,
  SmallText,
} from '../components/texts/CustomTexts';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import useFetch from '../hooks/useFetch';
import LoggedInFooter from '../components/footer/LoggedInFooter';
import {TouchableOpacity, View} from 'react-native';
import AppColors from '../colors';
import {AcceptButton} from '../components/buttons/CustomButtons';
import QuestionModal from '../components/questionModal/QuestionModal';

const QuestionItem = props => {
  return (
    <View
      style={{
        backgroundColor: AppColors.dark,
        padding: 10,
        marginVertical: 5,
      }}>
      <RegularText>Czas na odpowiedź:</RegularText>
      <CapitalizedText>{props.question?.enddate}</CapitalizedText>
      <View
        style={{
          borderBottomColor: AppColors.lightBlue,
          borderBottomWidth: 0.5,
          marginVertical: 5,
        }}
      />
      <RegularText>Pytanie:</RegularText>
      <CapitalizedText>{props.question?.question}</CapitalizedText>
      <SmallText>{props.question?.tooltip}</SmallText>
      <View
        style={{
          borderBottomColor: AppColors.lightBlue,
          borderBottomWidth: 0.5,
          marginVertical: 5,
        }}
      />
      <RegularText>Twoja odpowiedź:</RegularText>
      <CapitalizedText>
        {props.question?.answer?.answer ?? 'Brak'}
      </CapitalizedText>
      {props.question.answerAllowed && (
        <>
          <View
            style={{
              borderBottomColor: AppColors.lightBlue,
              borderBottomWidth: 0.5,
              marginTop: 5,
              marginBottom: 10,
            }}
          />
          <TouchableOpacity
            onPress={() => props.chooseQuestion(props.question)}
            style={{
              backgroundColor: AppColors.lightBlue,
              padding: 5,
              width: '60%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              alignSelf: 'center',
            }}>
            <RegularText style={{color: AppColors.dark}}>Odpowiedz</RegularText>
          </TouchableOpacity>
        </>
      )}
      {!props.question.answerAllowed && (
        <>
          <View
            style={{
              borderBottomColor: AppColors.lightBlue,
              borderBottomWidth: 0.5,
              marginVertical: 5,
            }}
          />
          <RegularText>Punkty:</RegularText>
          <CapitalizedText>
            {props.question?.answer?.points ?? '-'}
          </CapitalizedText>
        </>
      )}
    </View>
  );
};

const QuestionListScreen = () => {
  const [questionList, setQuestionList] = useState([]);
  const navigation = useNavigation();
  const {fetchData} = useFetch();
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [questionModalVisible, setQuestionModalVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const responseFetch = fetchData(
        res => {
          setQuestionList(res.questions);
        },
        'questions',
        null,
        null,
      );
    }, [questionModalVisible]),
  );

  const chooseQuestion = question => {
    setSelectedQuestion(question);
    setQuestionModalVisible(true);
  };

  return (
    <Background>
      <QuestionModal
        visible={questionModalVisible}
        setVisible={setQuestionModalVisible}
        question={selectedQuestion}
      />
      <LoggedInHeader />
      <CustomScrollView>
        <BigText style={{textAlign: 'center', marginVertical: 10}}>
          Pytania
        </BigText>
        {questionList.map((item, index) => {
          return (
            <QuestionItem
              key={index}
              question={item}
              chooseQuestion={chooseQuestion}
            />
          );
        })}
      </CustomScrollView>
      <PointsFooter />
      <LoggedInFooter />
    </Background>
  );
};

export default QuestionListScreen;
