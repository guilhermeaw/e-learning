import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  background-color: #6548a3;
  padding: 32px 24px 64px;
`;

export const HeaderTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SearchInput = styled.TextInput`
  background-color: #fff;
  margin-top: 24px;
  border-radius: 100px;
  padding: 16px 24px;
`;

export const CategoriesWrapper = styled.View`
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  margin-top: -16px;
  background-color: #f0edf5;
  padding: 24px 20px;
  flex: 1;
`;

export const CategoriesWrapperHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CategoriesWrapperTitle = styled.Text`
  color: #3d3d4c;
  font-weight: 400;
  font-size: 20px;
`;

export const CategoriesWrapperCourses = styled.Text`
  color: #a0a0b2;
`;

export const CategoriesListWrapper = styled.ScrollView`
  margin-top: 24px;
`;

export const CourseCard = styled(RectButton)`
  flex: 1;
  justify-content: center;
  background-color: #fff;
  border-radius: 16px;
  padding: 24px;
  margin: 4px;
`;

export const CourseTitle = styled.Text`
  color: #6c6c80;
  font-size: 15px;
  line-height: 20px;
  margin-top: 24px;
`;

export const CourseClassesTitle = styled.Text`
  color: #6c6c80;
  font-size: 10px;
  color: #c4c4d1;
  margin-top: 4px;
`;
