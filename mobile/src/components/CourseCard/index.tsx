import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  CourseCardWrapper,
  CourseTitle,
  CourseClassesTitle,
  ExcludeButtonContainer,
  ExcludeButton,
} from './styles';

type Course = {
  icon: ImageSourcePropType;
  name: string;
  classes: number;
};

interface CourseCardProps {
  course: Course;
  useExcludeOption?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  course,
  useExcludeOption = false,
}) => {
  const { navigate } = useNavigation();

  const handleNavigateToCourse = useCallback(() => {
    navigate('Course');
  }, [navigate]);

  return (
    <Container>
      <CourseCardWrapper onPress={handleNavigateToCourse}>
        <Image source={course.icon} />
        <CourseTitle>{course.name}</CourseTitle>
        <CourseClassesTitle>{course.classes} aulas</CourseClassesTitle>

        {useExcludeOption && (
          <ExcludeButtonContainer>
            <ExcludeButton>
              <Icon name="trash" size={20} color="#C4C4D1" />
            </ExcludeButton>
          </ExcludeButtonContainer>
        )}
      </CourseCardWrapper>
    </Container>
  );
};

export default CourseCard;
