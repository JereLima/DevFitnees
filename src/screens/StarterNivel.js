import React from 'react';
import {SafeAreaView, image, View, Text, Button, Alert} from 'react-native';
import styled from 'styled-components/native';
import {connect} from 'react-redux';
import DefaultButton from '../components/DefaultButton';
import {Header} from 'react-native/Libraries/NewAppScreen';

const Page = (props) => {
  let frase = '';
  switch (props.workoutDays.length) {
    case 1:
      frase = '1 dia só? é tabom né...';
      break;
    case 2:
      frase = '2 dias? não é dos melhore ein...';
      break;
    case 3:
      frase = 'Podia melhorar, mas 3 dias já ajuda';
      break;
    case 4:
      frase = 'Interessante... 4 dias, vamos nessa';
      break;
    case 5:
      frase = '5 dias??? Seeloko Cachorreira';
      break;
    case 6:
      frase = 'Ta saindo da jaula o monstro';
      break;
    case 7:
      frase = '7 Dias!!!Pane no sistema alguem me desconfigurou';
      break;
  }
  const setMyLevel = (l) => {
    props.setLevel(l);
    props.navigation.navigate('StarterRecommendations');
  };
  console.log(frase);
  return (
    <Container>
      <AreaText>
        <FunnyText>{frase}</FunnyText>
        <AskNivel>Qual o seu Nivel?</AskNivel>
      </AreaText>
      <LevelArea>
        <DefaultButton
          onPress={() => setMyLevel('Iniciante')}
          color={props.level == 'Iniciante' ? '#a5e8bc' : false}>
          <TextButton>Iniciante</TextButton>
        </DefaultButton>
        <DefaultButton
          onPress={() => setMyLevel('Intermediario')}
          color={props.level == 'Intermediario' ? '#a5e8bc' : false}>
          <TextButton>Intermediário</TextButton>
        </DefaultButton>
        <DefaultButton
          onPress={() => setMyLevel('Avançado')}
          color={props.level == 'Avançado' ? '#a5e8bc' : false}>  
          <TextButton>Avancado</TextButton>
        </DefaultButton>
      </LevelArea>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    level: state.userReducer.level,
    workoutDays: state.userReducer.workoutDays,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLevel: (level) => dispatch({type: 'SET_LEVEL', payload: {level}}),
    setWorkoutDays: (workoutDays) =>
      dispatch({type: 'SET_WORKOUTDAYS', payload: {workoutDays}}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Page);

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  padding: 30px;
  align-items: center;
  padding-top: 50px;
`;
const AreaText = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const FunnyText = styled.Text`
  font-size: 25px;
  margin-bottom: 20px;
  text-align: center;
`;
const AskNivel = styled.Text`
  font-size: 25px;
  margin-bottom: 20px;
`;
const LevelArea = styled.View`
  width: 100%;
`;
const TextButton = styled.Text`
  color: #000;
  font-size: 20px;
`;
const TextButtonSend = styled.Text`
  color: white;
  font-size: 20px;
`;
