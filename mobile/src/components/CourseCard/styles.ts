import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 50%;
`;

export const CourseCardWrapper = styled(RectButton)`
  justify-content: center;
  background-color: #fff;
  border-radius: 16px;
  padding: 24px;
  margin: 4px;
  position: relative;
  height: 172px;
`;

export const CourseTitle = styled.Text`
  color: #6c6c80;
  font-size: 15px;
  line-height: 20px;
  margin-top: 24px;
`;

export const CourseClassesTitle = styled.Text`
  font-size: 10px;
  color: #c4c4d1;
  margin-top: 4px;
`;

export const ExcludeButtonContainer = styled.View`
  position: absolute;
  right: 4px;
  top: 4px;
`;

export const ExcludeButton = styled(TouchableOpacity)`
  padding: 8px;
`;
