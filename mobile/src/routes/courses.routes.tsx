import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import SavedCourses from '../pages/SavedCourses';

const Tab = createBottomTabNavigator();

const CoursesRouter: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelPosition: 'beside-icon',
        activeTintColor: '#FF6680',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarIcon: () => <Icon name="home" size={24} /> }}
      />
      <Tab.Screen
        name="SavedCourses"
        component={SavedCourses}
        options={{
          tabBarLabel: 'Salvos',
          tabBarIcon: () => <Icon name="heart" size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default CoursesRouter;
