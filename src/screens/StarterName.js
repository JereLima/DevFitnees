import React from 'react';
import {SafeAreaView, image, View, Text, Button, Alert} from 'react-native';
import styled from 'styled-components/native';
import {connect} from 'react-redux';
import DefaultButton from '../components/DefaultButton';
import {Header} from 'react-native/Libraries/NewAppScreen';

const Page = (props) => {
  const nextAction = () => {
    if (!props.name) {
      alert('Você precisa de um nome!');
      return;
    }
    props.navigation.navigate('StarterDias');
  };

  const changeTextName = (t) => {
    props.setName(t);
    props.navigation.setParams({name: t});
  };

  return (
    <Container>
      <HeaderText>Qual o seu nome?</HeaderText>
      <InputName
        value={props.name}
        onChangeText={changeTextName}
        autoFocus={true}
        autoCapitalize="words"
        placeholder="Digite aqui..."
        onSubmitEditing={nextAction}
      />
      <AreaButton>
        <DefaultButton width="90%" color='#0072C0' onPress={nextAction}>
          <ButtonText>Próximo</ButtonText>
        </DefaultButton>
      </AreaButton>
      
    </Container>
  );
};

// Page.navigationOptions = ({navigation}) => {
//   const nextAction = () => {
//     if (!navigation.state.params || !navigation.state.params.name) {
//       alert('Você precisa de um nome!');
//       return;
//     } else {
//       navigation.navigate('StarterDias');
//     }
//   };

//   return {
//     title: 'Vamos Nessa!',
//     headerRight: (
//       <NextButton navigation={navigation} title="vamos" onPress={nextAction} />
//     ),
//     headerRightContainerStyle: {
//       marginRight: 10,
//     },
//   };
// };

const mapStateToProps = (state) => {
  return {
    name: state.userReducer.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => dispatch({type: 'SET_NAME', payload: {name}}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Page);

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;
const HeaderText = styled.Text`
  font-size: 35px;
  margin-top: 50px;
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
const AreaButton = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
`;
const NextButton = styled.Button``;
