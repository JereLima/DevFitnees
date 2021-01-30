import React from 'react';
import {SafeAreaView, image, View, Text, Button, Alert} from 'react-native';
import styled from 'styled-components/native';
import {connect} from 'react-redux';
import DefaultButton from '../components/DefaultButton';
import {Header} from 'react-native/Libraries/NewAppScreen';

const Page = (props) => {
  let firstName = props.name.split(' ')[0];

  const toogleDay = (d) => {
    let newWorkoutDays = [...props.workoutDays];

    if (!props.workoutDays.includes(d)) {
      //inserir
      newWorkoutDays.push(d);
    } else {
      //remover
      newWorkoutDays = newWorkoutDays.filter((i) => i != d);
    }
    props.setWorkoutDays(newWorkoutDays);
  };

  const nextScreen = () => {
    if (!props.workoutDays.length) {
      alert('selecione pelo menos um dia');
    } else {
      props.navigation.navigate('StarterNivel');
    }
  };
  return (
    <Container>
      <HeaderText>
        Olá{' '}
        <BoldText>
          {firstName}
          {props.workoutDays}
        </BoldText>
        , tudo bem?
      </HeaderText>
      <HeaderText>
        Quais <BoldText>dias da semana</BoldText> você gostaria de treinar?
      </HeaderText>
      <DaysArea>
        <DefaultButton
          width={120}
          onPress={() => toogleDay(1)}
          color={props.workoutDays.includes(1) ? '#a5e8bc' : '#dddd'}>
          <TextDay>SEGUNDA</TextDay>
        </DefaultButton>
        <DefaultButton
          width={120}
          onPress={() => toogleDay(2)}
          color={props.workoutDays.includes(2) ? '#a5e8bc' : '#dddd'}>
          <TextDay>TERÇA</TextDay>
        </DefaultButton>
        <DefaultButton
          width={'120'}
          onPress={() => toogleDay(3)}
          color={props.workoutDays.includes(3) ? '#a5e8bc' : '#dddd'}>
          <TextDay>QUARTA</TextDay>
        </DefaultButton>
        <DefaultButton
          width={'120'}
          onPress={() => toogleDay(4)}
          color={props.workoutDays.includes(4) ? '#a5e8bc' : '#dddd'}>
          <TextDay>QUINTA</TextDay>
        </DefaultButton>
        <DefaultButton
          width={'120'}
          onPress={() => toogleDay(5)}
          color={props.workoutDays.includes(5) ? '#a5e8bc' : '#dddd'}>
          <TextDay>SEXTA</TextDay>
        </DefaultButton>
        <DefaultButton
          width={'120'}
          onPress={() => toogleDay(6)}
          color={props.workoutDays.includes(6) ? '#a5e8bc' : '#dddd'}>
          <TextDay>SÁBADO</TextDay>
        </DefaultButton>
        <DefaultButton
          width={'120'}
          onPress={() => toogleDay(0)}
          color={props.workoutDays.includes(0) ? '#a5e8bc' : '#dddd'}>
          <TextDay>DOMINGO</TextDay>
        </DefaultButton>
      </DaysArea>
      <DefaultButton width={'90%'} color={props.workoutDays.length? '#0072C0': '#dddd'} onPress={nextScreen}>
        <TextButton>{props.workoutDays.length? 'Seguir' : 'Selecione'}</TextButton>
      </DefaultButton>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.userReducer.name,
    workoutDays: state.userReducer.workoutDays,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => dispatch({type: 'SET_NAME', payload: {name}}),
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
const HeaderText = styled.Text`
  font-size: 25px;
  margin-bottom: 30px;
  align-self: center;
  color: #333;
  text-align: center;
`;
const BoldText = styled.Text`
  font-size: 25px;
  margin-top: 50px;
  font-weight: bold;
  align-self: center;
  color: #333;
  align-self: center;
`;
const InputName = styled.TextInput`
  border: solid 1px #ccc;
  border-radius: 10px;
  margin: 10px 10px;
  font-size: 25px;
  padding: 10px;
`;
const DaysArea = styled.View`
  width: 90%;
  height: 400px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const TextDay = styled.Text``;
const TextButton = styled.Text``;
const NextButton = styled.Button``;
