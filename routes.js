import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import home from './pages/home';
import lanterna from './pages/lanterna';

const Stack = createStackNavigator();

export default function Routes(props) {
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Lanterna" component={lanterna} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }