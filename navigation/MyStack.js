import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

import HomeScreen from "../screens/HomeScreen";
import SetupGameScreen from "../screens/SetupGameScreen";
import GameScreen from '../screens/GameScreen';
import ScoreScreen from '../screens/ScoreScreen';

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="screen">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: 'Home' }}
        />
        <Stack.Screen
          name="SetupGameScreen"
          component={SetupGameScreen}
          options={{ headerTitle: 'Setup Game' }}
        />
        <Stack.Screen
          name="GameScreen"
          component={GameScreen}
          options={{ headerTitle: 'Game' }}
        />
        <Stack.Screen
          name="ScoreScreen"
          component={ScoreScreen}
          options={{ headerTitle: 'High Scores' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;