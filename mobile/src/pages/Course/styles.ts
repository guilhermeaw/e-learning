import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  background-color: #6548a3;
  padding: 32px 24px 64px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CourseWrapper = styled.View`
  flex: 1;
  background-color: #f0edf5;
  margin-top: -32px;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  padding: 32px 24px;
`;

export const CourseWrapperHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CourseTitle = styled.Text`
  color: #3d3d4c;
  font-size: 30px;
  line-height: 36px;
`;

export const CourseClassesText = styled.Text`
  color: #a0a0b2;
  font-size: 15px;
  line-height: 18px;
`;

export const ClassesList = styled.View`
  align-items: flex-end;
  margin-top: 24px;
`;

export const ClassCard = styled(RectButton)`
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;
  width: 90%;
  margin: 8px 0;

  flex-direction: row;
`;

export const ClassButton = styled.View`
  background-color: #61c5bd;
  margin-left: -45px;
  width: 68px;
  height: 68px;
  border-radius: 16px;

  justify-content: center;
  align-items: center;
`;

export const ClassContent = styled.View`
  margin-left: 24px;
  flex: 1;
`;

export const ClassTitle = styled.Text`
  font-size: 15px;
  line-height: 20px;
  width: 132px;
  color: #6c6c80;
`;

export const ClassFooter = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ClassInfoContainer = styled.View`
  flex-direction: row;
`;

export const ClassNumber = styled.Text`
  font-size: 10px;
  color: #c4c4d1;
  margin-right: 16px;
`;

export const ClassDuration = styled.Text`
  font-size: 10px;
  color: #c4c4d1;
`;

export const CompleteClassBadge = styled.View`
  width: 64px;
  padding: 3px 8px;
  border-radius: 12px;
  background-color: #61c5bd;

  justify-content: center;
  align-items: center;
`;

export const BadgeText = styled.Text`
  color: #fff;
  font-size: 10px;
  font-weight: bold;
`;
