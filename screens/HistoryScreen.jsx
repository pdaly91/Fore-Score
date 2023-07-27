import { Text, View, Button, StyleSheet, ScrollView, Pressable } from 'react-native';
import React from 'react';
import axios from 'axios';
import { getSum, getOverUnder } from './util/helpers.js';

import Scorecard from './components/Scorecard.jsx';

const { useState, useEffect } = React;

export default function HistoryScreen() {
  const [games, setGames] = useState(games);
  const [selected, setSelected] = useState(null);
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day:'numeric'};

  const fetchGames = async () => {
    let response = await axios.get('http://localhost:3000/forescore/games');
    setGames(response.data);
  };

  const handleSelect = (game) => {
    setSelected(game);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  if (!games) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (!selected) {
    return (
      <View style={styles.container}>
        <ScrollView>
          {games.map((game) => {
            return (
              <Pressable key={game._id} onPress={() => { handleSelect(game) }}>
                <View style={styles.gameEntry}>
                  <Text style={styles.gameEntryText}>{`${new Date(game.date).toLocaleDateString('en-US', dateOptions)}`}</Text>
                  <Text style={styles.gameEntryText}>{`Course: ${game.course}`}</Text>
                  <Text style={styles.gameEntryText}>{`Score: ${getSum(game.scores)}/${getSum(game.pars)} (${getOverUnder(game.scores, game.pars)})`}</Text>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    );
  }
  if (selected) {
    return (
      <View style={styles.container}>
        <Scorecard course={selected.course} yards={selected.yards} pars={selected.pars} scores={selected.scores}/>
        <View style={styles.button}>
          <Button
            onPress={() => { setSelected(null) }}
            title='Back'
            color='#FFF'
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 20,
    marginHorizontal: 20
  },
  gameEntry: {
    backgroundColor: '#DAD7CD',
    borderRadius: 25,
    padding: 10,
    marginVertical: 5,
    minWidth: 225,
    maxWidth: 225
  },
  gameEntryText: {
    textAlign: 'center'
  },
  button: {
    margin: 5,
    marginBottom: 300,
    borderWidth: 1,
    borderRadius: 5,
    maxWidth: 75,
    minWidth: 75,
    backgroundColor: '#588157',
    borderColor: '#344E41',
  },
});
