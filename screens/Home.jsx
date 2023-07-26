import { Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';
import React from 'react';

const { useState } = React;

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Play A Game"
          onPress={() => navigation.navigate('GameScreen')}
          color='#FFF'
        />
      </View>
      <View style={styles.button}>
        <Button
          title="View History"
          onPress={() => navigation.navigate('HistoryScreen')}
          color='#FFF'
        />
      </View>
      <View style={styles.button}>
        <Button
          title="View Bag"
          // onPress={() => navigation.navigate('Scorecard')}
          color='#FFF'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    maxWidth: 150,
    minWidth: 150,
    backgroundColor: '#588157',
    borderColor: '#344E41'
  }
});
