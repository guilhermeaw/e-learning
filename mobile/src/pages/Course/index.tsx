import React, { useCallback } from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { StackNavigationProp } from '@react-navigation/stack';

import {
  Container,
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

import SimpleHeader from '../../components/SimpleHeader';

interface CourseProps {
  navigation: StackNavigationProp<any>;
}

const Course: React.FC<CourseProps> = ({ navigation }) => {
  const handleNavigateToClass = useCallback(() => {
    navigation.navigate('Class');
  }, [navigation]);

  return (
    <Container>
      <SimpleHeader navigation={navigation} />

      <CourseWrapper>
        <CourseWrapperHeader>
          <CourseTitle>Matemática</CourseTitle>
          <CourseClassesText>16 aulas</CourseClassesText>
        </CourseWrapperHeader>

        <ClassesList>
          <ClassCard onPress={handleNavigateToClass}>
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
