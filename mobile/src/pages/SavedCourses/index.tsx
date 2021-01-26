import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import SearchHeader from '../../components/SearchHeader';

import mathIcon from '../../assets/math.png';
import physicsIcon from '../../assets/physics.png';
import englishIcon from '../../assets/english.png';
import chemistryIcon from '../../assets/chemistry.png';

import CourseCard from '../../components/CourseCard';

import {
  Container,
  SavedCoursesWrapper,
  SavedCoursesTitle,
  SavedCoursesListWrapper,
} from './styles';

const SavedCourses: React.FC = () => {
  const savedCourses = [
    {
      id: 1,
      name: 'Matemática',
      classes: 16,
      icon: mathIcon,
    },
    {
      id: 2,
      name: 'Química',
      classes: 61,
      icon: chemistryIcon,
    },
    {
      id: 3,
      name: 'Inglês',
      classes: 6,
      icon: englishIcon,
    },
  ];

  return (
    <Container>
      <SearchHeader />

      <SavedCoursesWrapper>
        <SavedCoursesTitle>Cursos salvos</SavedCoursesTitle>

        <SavedCoursesListWrapper>
          <FlatList
            data={savedCourses}
            keyExtractor={item => String(item.id)}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }) => (
              <CourseCard useExcludeOption course={item} />
            )}
          />
        </SavedCoursesListWrapper>
      </SavedCoursesWrapper>
    </Container>
  );
};

export default SavedCourses;
