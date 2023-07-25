import { Text, View, Button, SafeAreaView } from 'react-native';
import React from 'react';

import Scorecard from './Scorecard.jsx';

const { useState } = React;

export default function Home() {

  return (
    <SafeAreaView>
      <View>
        <Scorecard />
      </View>
    </SafeAreaView>
  );
};