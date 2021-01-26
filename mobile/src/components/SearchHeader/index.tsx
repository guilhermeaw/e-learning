import React, { useCallback } from 'react';

import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Container, Header, HeaderTop, SearchInput } from './styles';
import logoIcon from '../../assets/logo.png';

const SearchHeader: React.FC = () => {
  const { navigate } = useNavigation();

  const handleLogout = useCallback(() => {
    navigate('Login');
  }, [navigate]);

  return (
    <Container>
      <Header>
        <HeaderTop>
          <Image source={logoIcon} />
          <TouchableOpacity onPress={handleLogout}>
            <Icon name="power" size={24} color="#FF6680" />
          </TouchableOpacity>
        </HeaderTop>
        <SearchInput placeholder="Busque um curso" />
      </Header>
    </Container>
  );
};

export default SearchHeader;
