import { Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';
import React from 'react';

import Header from './components/Header.jsx';
import Scorecard from './Scorecard.jsx';

const { useState } = React;

export default function Home() {

  return (
    // <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <Scorecard />
      </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
