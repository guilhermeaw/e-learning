import React from 'react';
import { Text, View } from 'react-native';

// import { Container } from './styles';

const App: React.FC = () => {
  return <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#f5f5f5' }}>
    <Text style={{ fontSize: 24 }}>Hello world</Text>
  </View>;
}

export default App;
