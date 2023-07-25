import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import React from 'react';

import Scorecard from './components/Scorecard.jsx';

const { useState } = React;

export default function GameScreen() {
  const [course, setCourse] = useState('');
  const [ready, setReady] = useState(false);

  const handleSubmitCourse = () => {
    if (course.length > 0) {
      setReady(true);
    }
  }

  if (!ready) {
    return (
      <View style={styles.courseInput}>
        <Text>Enter Course Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setCourse}
          value={course}
          placeholder="Course Name"
          inputMode="text"
          keyboardType="default"
          returnKeyType="go"
          onEndEditing={handleSubmitCourse}
        />
      </View>
    )
  } else {
    return (
      <View style={styles.scorecard}>
        <Scorecard course={course} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  courseInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  scorecard: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});