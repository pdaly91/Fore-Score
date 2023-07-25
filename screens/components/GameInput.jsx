import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import React from 'react';

export default function GameInput({currentHole, handleUpdateHole}) {

  if (!currentHole) {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Button
            title="Begin"
            onPress={handleUpdateHole}
            color='#FFF'
          />
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.holeName}>{`Hole ${currentHole}`}</Text>
      <Text style={styles.holeText}>Yards:</Text>
      <Text style={styles.holeText}>Par:</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  holeName: {
    marginVertical: 10,
    fontSize: 24
  },
  holeText: {
    marginVertical: 5,
    fontSize: 16
  },
  button: {
    margin: 5,
    borderWidth: 1,
    maxWidth: 150,
    minWidth: 150,
    backgroundColor: '#588157',
    borderColor: '#344E41'
  }
});