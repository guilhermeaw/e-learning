import React from 'react';
import { Image, ImageBackground } from 'react-native';

import eLearningIcon from '../../assets/e-learning.png';
import teachingIcon from '../../assets/teaching.png';

import {
  Container,
  TopContainer,
  BottomContainer,
  Title,
  Description,
  StartStudyButton,
  StartStudyButtonText,
} from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <TopContainer>
        <ImageBackground style={{ flex: 1 }} source={eLearningIcon}>
          <Image source={teachingIcon} />
        </ImageBackground>
      </TopContainer>

      <BottomContainer>
        <Title>Aprenda da melhor forma</Title>
        <Description>
          Entre na plataforma e acesse cursos de diversas áreas de conhecimento.
        </Description>

        <StartStudyButton>
          <StartStudyButtonText>Começar os estudos</StartStudyButtonText>
        </StartStudyButton>
      </BottomContainer>
    </Container>
  );
};

export default Login;
