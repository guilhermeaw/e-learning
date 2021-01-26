import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const VideoPlayer = styled.View`
  height: 210px;
  background-color: #3d3d4c;
  margin-top: -32px;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;

  justify-content: center;
  align-items: center;
`;

export const ClassWrapper = styled.View`
  flex: 1;
  background-color: #f0edf5;
  padding: 32px 24px;

  justify-content: space-between;
`;

export const ClassContainer = styled.View``;

export const ClassTitle = styled.Text`
  font-size: 30px;
`;

export const ClassInfoWrapper = styled.View`
  flex-direction: row;
  margin: 16px 0 24px;
`;

export const ClassInfoText = styled.Text`
  font-size: 12px;
  color: #a0a0b2;
`;

export const ClassDescription = styled.Text`
  font-size: 15px;
  color: #6c6c80;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const LastClassButton = styled(RectButton)`
  width: 50%;
  border-radius: 40px;
  padding: 16px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LastClassButtonText = styled.Text`
  color: #ff6680;
  font-size: 15px;
  margin-left: 16px;
`;

export const NextClassButton = styled(RectButton)`
  width: 50%;
  background-color: #ff6680;
  border-radius: 40px;
  padding: 16px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NextClassButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  margin-right: 16px;
`;
