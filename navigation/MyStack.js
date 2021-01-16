import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "../screens/HomeScreen";
import SetupGameScreen from "../screens/SetupGameScreen";
import GameScreen from '../screens/GameScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="SetupGameScreen"
            component={SetupGameScreen}
          />
          <Stack.Screen
            name="GameScreen"
            component={GameScreen}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;