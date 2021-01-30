import React from 'react';
import {SafeAreaView, image, View, Text, Button} from 'react-native';
import styled from 'styled-components/native';
import DefaultButton from '../components/DefaultButton';

const Page = (props) => {
  const start = () => {
    props.navigation.navigate('StarterName');
};
  return (
    <Container>
      <WelcomeText>Bem Vindo ao DevFitness</WelcomeText>
      <AreaLogo>
        <Logo source={require('../assets/boneco.png')} />
      </AreaLogo>
      <FooterArea>
        <DefaultButton width="90%" color='#0072C0'  onPress={start}>
          <ButtonText>Iniciar</ButtonText>
        </DefaultButton>
      </FooterArea>
    </Container>
  );
};

Page.navigationOptions = {
  headerShown: false,
};

export default Page;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const WelcomeText = styled.Text`
  font-size: 22px;
  color: #333;
  margin-top: 50px;
  align-self: center;
`;
const AreaLogo = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.Image`
  height: 300px;
  width: 300px;
`;
const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
`;
const FooterArea = styled.View`
  justify-content: center;
  align-self: center;
  align-items: center;
  width: 80%;
  height: 50px;
`;