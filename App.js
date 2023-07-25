import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home.jsx';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Home />
      </View>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
