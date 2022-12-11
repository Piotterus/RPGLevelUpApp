import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {TextInput, View} from 'react-native';
import styles from './QuestionModal.style';
import {AcceptButton} from '../buttons/CustomButtons';
import {CapitalizedText, RegularText} from '../texts/CustomTexts';
import useFetch from '../../hooks/useFetch';

const QuestionModal = props => {
  const [answerText, setAnswerText] = useState('');
  const {fetchData} = useFetch();

  useEffect(() => {
    setAnswerText(props.question?.answer?.answer);
  }, [props.visible, props.question]);

  const answerQuestion = () => {
    const postData = {
      question_id: props.question?.id,
      answer: answerText,
    };

    props.setVisible(false);
    fetchData(() => {}, 'answerQuestion', null, postData);
  };

  return (
    <Modal
      isVisible={props.visible}
      onBackdropPress={() => props.setVisible(false)}>
      <View style={styles.mainView}>
        <RegularText>Pytanie</RegularText>
        <CapitalizedText>{props?.question?.question}</CapitalizedText>
        <RegularText>Odpowiedź</RegularText>
        <TextInput
          value={answerText}
          onChangeText={text => setAnswerText(text)}
          style={styles.textInput}
          multiline={true}
        />
        <AcceptButton text={'Odpowiedz'} onPress={() => answerQuestion()} />
      </View>
    </Modal>
  );
};

export default QuestionModal;
