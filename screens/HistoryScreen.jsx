import { Text, View, Button, StyleSheet } from 'react-native';
import React from 'react';
import axios from 'axios';

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text>History Screen</Text>
    </View>
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
