import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import React from 'react';

const { useState, useEffect } = React;

export default function GameInput({currentHole, handleUpdateHole}) {
  const [distance, setDistance] = useState(null);
  const [par, setPar] = useState(null);
  const [strokes, setStrokes] = useState(0);

  const handleCompleteHole = () => {
    // validate
    let distNum = Number(distance);
    let parNum = Number(par);
    let strNum = Number(strokes);
    handleUpdateHole(false, distNum, parNum, strNum)
  };

  useEffect(() => {
    setDistance(null);
    setPar(null);
    setStrokes(0);
  }, [currentHole]);

  if (!currentHole) {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Button
            title="Begin"
            onPress={() => { handleUpdateHole(true) }}
            color='#FFF'
          />
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.holeName}>{`Hole ${currentHole}`}</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.holeText}>Yards:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDistance}
          value={distance}
          placeholder="Set Distance"
          keyboardType="number-pad"
          returnKeyType='done'
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.holeText}>Par:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPar}
          value={par}
          placeholder="Set Par"
          keyboardType="number-pad"
          returnKeyType='done'
        />
      </View>
      <Text style={styles.holeStrokes}>{`Strokes: ${strokes}`}</Text>
      <View style={styles.inputGroup}>
        <View style={styles.strokeButton}>
          <Button
            title="-1"
            onPress={() => {setStrokes(strokes - 1)}}
            color='#FFF'
          />
        </View>
        <View style={styles.strokeButton}>
          <Button
            title="+1"
            onPress={() => {setStrokes(strokes + 1)}}
            color='#FFF'
          />
        </View>
      </View>
      <View style={styles.inputGroup}>
        <View style={styles.finishButton}>
          <Button
            title="Complete Hole"
            onPress={handleCompleteHole}
            color='#FFF'
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 180,
    maxWidth: 180,
  },
  input: {
    height: 40,
    padding: 10,
  },
  holeName: {
    marginVertical: 10,
    fontSize: 28
  },
  holeStrokes: {
    marginVertical: 10,
    fontSize: 24
  },
  holeText: {
    padding: 10,
    fontSize: 16
  },
  button: {
    margin: 5,
    borderWidth: 1,
    maxWidth: 150,
    minWidth: 150,
    backgroundColor: '#588157',
    borderColor: '#344E41'
  },
  strokeButton: {
    margin: 5,
    borderWidth: 1,
    maxWidth: 45,
    minWidth: 45,
    backgroundColor: '#588157',
    borderColor: '#3A5A40',
    borderRadius: 10
  },
  finishButton: {
    margin: 5,
    borderWidth: 1,
    maxWidth: 150,
    minWidth: 150,
    backgroundColor: '#588157',
    borderColor: '#3A5A40',
    borderRadius: 10
  }
});