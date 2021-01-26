import React, { useCallback } from 'react';
import { Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
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
import SearchHeader from '../../components/SearchHeader';

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

  const { navigate } = useNavigation();

  const handleNavigateToCourse = useCallback(() => {
    navigate('Course');
  }, [navigate]);

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
            renderItem={({ item }) => (
              <CourseCard onPress={handleNavigateToCourse}>
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
