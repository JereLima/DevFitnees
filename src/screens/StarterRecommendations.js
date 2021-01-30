import React from 'react';
import {SafeAreaView, image, View, Text, Button, Alert} from 'react-native';
import styled from 'styled-components/native';
import {connect} from 'react-redux';
import DefaultButton from '../components/DefaultButton';
import {Header} from 'react-native/Libraries/NewAppScreen';
import workoutsList from '../presetWorkouts.json/';
import {FlatList} from 'react-native-gesture-handler';
import Workout from '../components/Workout';

const Page = (props) => {
  console.log(workoutsList);
  return (
    <Container>
      <HeaderText>Treinos recomendados pra você!</HeaderText>
      <HeaderText>{props.workouts.length}</HeaderText>
      <AreaWorkouts>
        <WorkoutList
          data={workoutsList}
          renderItem={({item}) => <Workout data={item} />}
          keyExtractor={(item) => item.id}
        />
        <DefaultButton
          color={!props.workouts.length ? '#ddd' : 'green'}
          width={'90%'}>
          <TextButton>
            {!props.workouts.length ? 'Ignorar' : 'Proxima'}
          </TextButton>
        </DefaultButton>
      </AreaWorkouts>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    level: state.userReducer.level,
    workoutDays: state.userReducer.workoutDays,
    workouts: state.userReducer.workouts,
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
const HeaderText = styled.Text`
  font-size: 25px;
  color: #000;
`;
const AreaWorkouts = styled.View`
  width: 100%;
  align-items: center;
`;
const TextButton = styled.Text`
  font-size: 25px;
`;
const WorkoutList = styled.FlatList`
  width: 100%;
`;
