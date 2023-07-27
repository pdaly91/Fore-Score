import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home.jsx';
import GameScreen from './screens/GameScreen.jsx';
import HistoryScreen from './screens/HistoryScreen.jsx';
import EquipmentScreen from './screens/EquipmentScreen.jsx';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Fore Score",
            headerStyle: {
              backgroundColor: '#588157',
            },
            headerTintColor: '#FFF'
          }}
        />
        <Stack.Screen
          name="GameScreen"
          component={GameScreen}
          options={{
            title: "New Game",
            headerStyle: {
              backgroundColor: '#588157',
            },
            headerTintColor: '#FFF'
          }}
        />
        <Stack.Screen
          name="HistoryScreen"
          component={HistoryScreen}
          options={{
            title: "My History",
            headerStyle: {
              backgroundColor: '#588157',
            },
            headerTintColor: '#FFF'
          }}
        />
        <Stack.Screen
          name="EquipmentScreen"
          component={EquipmentScreen}
          options={{
            title: "My Clubs",
            headerStyle: {
              backgroundColor: '#588157',
            },
            headerTintColor: '#FFF'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});
