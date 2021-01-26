import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import logoIcon from '../../assets/logo.png';

import { Container, Header } from './styles';

interface SimpleHeaderProps {
  navigation: StackNavigationProp<any>;
}

const SimpleHeader: React.FC<SimpleHeaderProps> = ({ navigation }) => {
  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="arrow-left" size={24} color="#FF6680" />
        </TouchableOpacity>

        <Image source={logoIcon} />

        <TouchableOpacity>
          <Icon name="heart" size={24} color="#FF6680" />
        </TouchableOpacity>
      </Header>
    </Container>
  );
};

export default SimpleHeader;
