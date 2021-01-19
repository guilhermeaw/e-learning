import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 32px;
`;

export const TopContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const BottomContainer = styled.View``;

export const Title = styled.Text`
  color: #ff6680;
  font-size: 36px;
  margin-bottom: 16px;
  width: 75%;
`;

export const Description = styled.Text`
  color: #edebf5;
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 40px;
  width: 75%;
`;

export const StartStudyButton = styled(RectButton)`
  background-color: #ff6680;
  border-radius: 100px;
  padding: 20px;
`;

export const StartStudyButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 15px;
`;
