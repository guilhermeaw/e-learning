import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import SimpleHeader from '../../components/SimpleHeader';

import {
  Container,
  ClassWrapper,
  VideoPlayer,
  ClassContainer,
  ClassTitle,
  ClassInfoWrapper,
  ClassInfoText,
  ClassDescription,
  Footer,
  LastClassButton,
  LastClassButtonText,
  NextClassButton,
  NextClassButtonText,
} from './styles';

interface ClassProps {
  navigation: StackNavigationProp<any>;
}

const Class: React.FC<ClassProps> = ({ navigation }) => {
  return (
    <Container>
      <SimpleHeader navigation={navigation} />

      <VideoPlayer>
        <TouchableOpacity>
          <Icon name="play-circle" size={64} color="#fff" />
        </TouchableOpacity>
      </VideoPlayer>

      <ClassWrapper>
        <ClassContainer>
          <ClassTitle>Introdução à teoria matemática</ClassTitle>
          <ClassInfoWrapper>
            <ClassInfoText style={{ marginRight: 16 }}>Aula 01</ClassInfoText>
            <Icon name="clock" style={{ marginRight: 8 }} color="#A0A0B2" />
            <ClassInfoText>5min</ClassInfoText>
          </ClassInfoWrapper>

          <ClassDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus
            condimentum gravida. Aenean condimentum vehicula sapien, eleifend
            metus congue vel. {'\n\n'}
            Suspendisse vitae tellus eu lacus facilisis auctor nec tristique
            eros.
          </ClassDescription>
        </ClassContainer>

        <Footer>
          <LastClassButton>
            <Icon name="arrow-left" size={20} color="#FF6680" />
            <LastClassButtonText>Aula anterior</LastClassButtonText>
          </LastClassButton>

          <NextClassButton>
            <NextClassButtonText>Próxima aula</NextClassButtonText>
            <Icon name="arrow-right" size={20} color="#fff" />
          </NextClassButton>
        </Footer>
      </ClassWrapper>
    </Container>
  );
};

export default Class;
