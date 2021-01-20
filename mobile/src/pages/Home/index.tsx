import React from 'react';
import { Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import logoIcon from '../../assets/logo.png';
import mathIcon from '../../assets/math.png';
import physicsIcon from '../../assets/physics.png';
import englishIcon from '../../assets/english.png';
import chemistryIcon from '../../assets/chemistry.png';

import {
  Container,
  Header,
  HeaderTop,
  SearchInput,
  CategoriesWrapper,
  CategoriesWrapperHeader,
  CategoriesWrapperTitle,
  CategoriesWrapperCourses,
  CategoriesListWrapper,
  CourseCard,
  CourseTitle,
  CourseClassesTitle,
} from './styles';

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
      <Header>
        <HeaderTop>
          <Image source={logoIcon} />
          <Icon name="power" size={24} color="#FF6680" />
        </HeaderTop>
        <SearchInput placeholder="Busque um curso" />
      </Header>

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
            renderItem={({ item }) => (
              <CourseCard>
                <Image source={item.icon} />
                <CourseTitle>{item.name}</CourseTitle>
                <CourseClassesTitle>{item.classes} aulas</CourseClassesTitle>
              </CourseCard>
            )}
          />
        </CategoriesListWrapper>
      </CategoriesWrapper>
    </Container>
  );
};

export default Home;
