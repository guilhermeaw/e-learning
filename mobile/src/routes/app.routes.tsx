import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../pages/Login';
import CoursesRouter from './courses.routes';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#6548A3' },
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Courses" component={CoursesRouter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
