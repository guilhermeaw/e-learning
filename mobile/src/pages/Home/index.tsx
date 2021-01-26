import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import mathIcon from '../../assets/math.png';
import physicsIcon from '../../assets/physics.png';
import englishIcon from '../../assets/english.png';
import chemistryIcon from '../../assets/chemistry.png';

import {
  Container,
  CategoriesWrapper,
  CategoriesWrapperHeader,
  CategoriesWrapperTitle,
  CategoriesWrapperCourses,
  CategoriesListWrapper,
} from './styles';

import SearchHeader from '../../components/SearchHeader';
import CourseCard from '../../components/CourseCard';

const Home: React.FC = () => {
  const categories = [
    {
      id: 1,
      name: 'Matemática',
      classes: 16,
      icon: mathIcon,
    },
    {
      id: 2,
      name: 'Física',
      classes: 25,
      icon: physicsIcon,
    },
    {
      id: 3,
      name: 'Inglês',
      classes: 6,
      icon: englishIcon,
    },
    {
      id: 4,
      name: 'Química',
      classes: 61,
      icon: chemistryIcon,
    },
  ];

  return (
    <Container>
      <SearchHeader />

      <CategoriesWrapper>
        <CategoriesWrapperHeader>
          <CategoriesWrapperTitle>Categorias</CategoriesWrapperTitle>
          <CategoriesWrapperCourses>43 cursos</CategoriesWrapperCourses>
        </CategoriesWrapperHeader>

        <CategoriesListWrapper>
          <FlatList
            data={categories}
            keyExtractor={item => String(item.id)}
            numColumns={2}
            renderItem={({ item }) => <CourseCard course={item} />}
          />
        </CategoriesListWrapper>
      </CategoriesWrapper>
    </Container>
  );
};

export default Home;
