import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import React from 'react';

import Scorecard from './components/Scorecard.jsx';
import GameInput from './components/GameInput.jsx';

const { useState } = React;

export default function GameScreen() {
  const [course, setCourse] = useState(''); // set back to empty
  const [ready, setReady] = useState(false); // set back to false
  const [currentHole, setCurrentHole] = useState(0);
  const [yards, setYards] = useState([]);
  const [pars, setPars] = useState([]);
  const [scores, setScores] = useState([]);

  const handleSubmitCourse = () => {
    if (course.length > 0) {
      setReady(true);
    }
  };

  const handleUpdateHole = (start, yard, par, score) => {
    if (start) {
      setCurrentHole(1);
    } else {
      setYards([...yards, yard]);
      setPars([...pars, par]);
      setScores([...scores, score]);
      setCurrentHole(currentHole + 1);
    }
  };

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
      <View style={styles.container}>
        <Scorecard
          course={course}
          yards={yards}
          pars={pars}
          scores={scores}
        />
        <GameInput
          currentHole={currentHole}
          handleUpdateHole={handleUpdateHole}
        />
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
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});