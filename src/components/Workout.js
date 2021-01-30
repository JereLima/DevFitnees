import React from 'react';
import styled from 'styled-components/native';

const Workout = styled.View`
  height: 50px;
  align-items: center;
  padding: 10px;
  background-color: #f4f4f4;
  flex-direction: row;
  border-radius: 10px;
  margin-bottom: 10px;
  border: solid 2px #dddd;
`;
const WorkoutInfo = styled.Text`
  flex:1;
`;
const WorkoutTitle = styled.Text`
  font-size: 17px;
  color: #000;
  margin: 10px;
`;
const MuscleScroll = styled.ScrollView`
  background-color: #dddd;
  margin: 10px;
`;
const WorkoutAction = styled.View`
  justify-content: center;
`;
const WorkoutButton = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;
const WorkoutButtonImage = styled.Image`
  width: 25px;
  height: 25px;
`;

export default (props) => {
  return (
    <Workout>
      <WorkoutInfo>
        <WorkoutTitle>{props.data.name}</WorkoutTitle>
        <MuscleScroll horizontal={true} />
      </WorkoutInfo>
      <WorkoutAction>
        <WorkoutButton>
          <WorkoutButtonImage source={require('../assets/add.png')} />
        </WorkoutButton>
      </WorkoutAction>
    </Workout>
  );
};
