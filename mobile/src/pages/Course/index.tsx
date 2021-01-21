import React, { useCallback } from 'react';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';

import {
  Container,
  Header,
  CourseWrapper,
  CourseWrapperHeader,
  CourseTitle,
  CourseClassesText,
  ClassesList,
  ClassCard,
  ClassButton,
  ClassContent,
  ClassTitle,
  ClassFooter,
  ClassInfoContainer,
  ClassNumber,
  ClassDuration,
  CompleteClassBadge,
  BadgeText,
} from './styles';

import logoIcon from '../../assets/logo.png';

interface CourseProps {
  navigation: StackNavigationProp<any>;
}

const Course: React.FC<CourseProps> = ({ navigation }) => {
  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="arrow-left" size={24} color="#FF6680" />
        </TouchableOpacity>

        <Image source={logoIcon} />

        <TouchableOpacity>
          <Icon name="heart" size={24} color="#FF6680" />
        </TouchableOpacity>
      </Header>

      <CourseWrapper>
        <CourseWrapperHeader>
          <CourseTitle>Matemática</CourseTitle>
          <CourseClassesText>16 aulas</CourseClassesText>
        </CourseWrapperHeader>

        <ClassesList>
          <ClassCard>
            <ClassButton>
              <Icon name="play-circle" size={32} color="#fff" />
            </ClassButton>
            <ClassContent>
              <ClassTitle>Introdução à teoria matemática</ClassTitle>
              <ClassFooter>
                <ClassInfoContainer>
                  <ClassNumber>Aula 01</ClassNumber>
                  <ClassDuration>
                    <Icon name="clock" size={8} color="#C4C4D1" /> 5min
                  </ClassDuration>
                </ClassInfoContainer>

                <CompleteClassBadge>
                  <BadgeText>Completo!</BadgeText>
                </CompleteClassBadge>
              </ClassFooter>
            </ClassContent>
          </ClassCard>
          <ClassCard>
            <ClassButton>
              <Icon name="play-circle" size={32} color="#fff" />
            </ClassButton>
            <ClassContent>
              <ClassTitle>Introdução à teoria matemática</ClassTitle>
              <ClassFooter>
                <ClassInfoContainer>
                  <ClassNumber>Aula 01</ClassNumber>
                  <ClassDuration>
                    <Icon name="clock" size={8} color="#C4C4D1" /> 5min
                  </ClassDuration>
                </ClassInfoContainer>

                <CompleteClassBadge>
                  <BadgeText>Completo!</BadgeText>
                </CompleteClassBadge>
              </ClassFooter>
            </ClassContent>
          </ClassCard>
          <ClassCard>
            <ClassButton>
              <Icon name="play-circle" size={32} color="#fff" />
            </ClassButton>
            <ClassContent>
              <ClassTitle>Introdução à teoria matemática</ClassTitle>
              <ClassFooter>
                <ClassInfoContainer>
                  <ClassNumber>Aula 01</ClassNumber>
                  <ClassDuration>
                    <Icon name="clock" size={8} color="#C4C4D1" /> 5min
                  </ClassDuration>
                </ClassInfoContainer>

                <CompleteClassBadge>
                  <BadgeText>Completo!</BadgeText>
                </CompleteClassBadge>
              </ClassFooter>
            </ClassContent>
          </ClassCard>
          <ClassCard>
            <ClassButton>
              <Icon name="play-circle" size={32} color="#fff" />
            </ClassButton>
            <ClassContent>
              <ClassTitle>Introdução à teoria matemática</ClassTitle>
              <ClassFooter>
                <ClassInfoContainer>
                  <ClassNumber>Aula 01</ClassNumber>
                  <ClassDuration>
                    <Icon name="clock" size={8} color="#C4C4D1" /> 5min
                  </ClassDuration>
                </ClassInfoContainer>

                <CompleteClassBadge>
                  <BadgeText>Completo!</BadgeText>
                </CompleteClassBadge>
              </ClassFooter>
            </ClassContent>
          </ClassCard>
        </ClassesList>
      </CourseWrapper>
    </Container>
  );
};

export default Course;
