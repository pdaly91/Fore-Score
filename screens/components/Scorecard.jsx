import { Text, View, Button, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { getSum, getOverUnder } from '../util/helpers.js';

const { useState, useEffect } = React;

export default function Scorecard({course, yards, pars, scores}) {
  const holesFront = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const holesBack = [10, 11, 12, 13, 14, 15, 16, 17, 18];
  const [yardsFront, setYardsFront] = useState([]);
  const [yardsBack, setYardsBack] = useState([]);
  const [parFront, setParFront] = useState([]);
  const [parBack, setParBack] = useState([]);
  const [scoreFront, setScoreFront] = useState([]);
  const [scoreBack, setScoreBack] = useState([]);

  useEffect(() => {
    let frntYds = [];
    let bckYds = [];
    let frntPrs = [];
    let bckPrs = [];
    let frntScr = [];
    let bckScr = [];
    for (let i = 0; i < 18; i++) {
      if (i < 9) {
        yards[i] ? frntYds.push(yards[i]) : frntYds.push(null);
        pars[i] ? frntPrs.push(pars[i]) : frntPrs.push(null);
        scores[i] ? frntScr.push(scores[i]) : frntScr.push(null);
      } else {
        yards[i] ? bckYds.push(yards[i]) : bckYds.push(null);
        pars[i] ? bckPrs.push(pars[i]) : bckPrs.push(null);
        scores[i] ? bckScr.push(scores[i]) : bckScr.push(null);
      }
    }
    setYardsFront(frntYds);
    setYardsBack(bckYds);
    setParFront(frntPrs);
    setParBack(bckPrs);
    setScoreFront(frntScr);
    setScoreBack(bckScr);
  }, [yards]);

  return (
    <View style={styles.container}>
      <Text>{`${course} - Scorecard`}</Text>
      <View style={styles.table}>
        <View style={styles.holesHeader}>
          <Text style={styles.tableCell}>Hole:</Text>
          {holesFront.map((hole, index) => {
            return <Text style={styles.tableCell} key={`holesFront${index}`}>{hole}</Text>
          })}
          <Text style={styles.tableCell}>OUT</Text>
        </View>
        <View style={styles.yardsHeader}>
          <Text style={styles.tableCell}>Yards:</Text>
          {yardsFront.map((yards, index) => {
            return <Text style={styles.tableCell} key={`yardsFront${index}`}>{yards}</Text>
          })}
          <Text style={styles.tableCell}>{getSum(yardsFront)}</Text>
        </View>
        <View style={styles.parHeader}>
          <Text style={styles.tableCell}>Par:</Text>
          {parFront.map((par, index) => {
            return <Text style={styles.tableCell} key={`parFront${index}`}>{par}</Text>
          })}
          <Text style={styles.tableCell}>{getSum(parFront)}</Text>
        </View>
        <View style={styles.scoreRow}>
          <Text style={styles.tableCell}>Score:</Text>
          {scoreFront.map((score, index) => {
            return <Text style={styles.tableCell} key={`scoreFront${index}`}>{score === null ? '' : score}</Text>
          })}
          <Text style={styles.tableCell}>{getSum(scoreFront)}</Text>
        </View>
      </View>
      <View style={styles.table}>
        <View style={styles.holesHeader}>
          <Text style={styles.tableCell}>Hole:</Text>
          {holesBack.map((hole, index) => {
            return <Text style={styles.tableCell} key={`holesBack${index}`}>{hole}</Text>
          })}
          <Text style={styles.tableCell}>IN</Text>
        </View>
        <View style={styles.yardsHeader}>
          <Text style={styles.tableCell}>Yards:</Text>
          {yardsBack.map((yards, index) => {
            return <Text style={styles.tableCell} key={`yardsBack${index}`}>{yards}</Text>
          })}
          <Text style={styles.tableCell}>{getSum(yardsBack)}</Text>
        </View>
        <View style={styles.parHeader}>
          <Text style={styles.tableCell}>Par:</Text>
          {parBack.map((par, index) => {
            return <Text style={styles.tableCell} key={`parBack${index}`}>{par}</Text>
          })}
          <Text style={styles.tableCell}>{getSum(parBack)}</Text>
        </View>
        <View style={styles.scoreRow}>
          <Text style={styles.tableCell}>Score:</Text>
          {scoreBack.map((score, index) => {
            return <Text style={styles.tableCell} key={`scoreBack${index}`}>{score === null ? '' : score}</Text>
          })}
          <Text style={styles.tableCell}>{getSum(scoreBack)}</Text>
        </View>
      </View>
      <View style={styles.total}>
        <Text>{`Total: ${getSum(scores)} / ${getSum(pars)}  `}</Text>
        <Text>{`( ${getOverUnder(scores, pars)} )`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  table: {
    marginVertical: 4
  },
  holesHeader: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignContent: 'center',
    backgroundColor: '#a3b18a',
    borderWidth: 1
  },
  yardsHeader: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignContent: 'center',
    backgroundColor: '#dad7cd',
    borderLeftWidth: 1,
    borderRightWidth: 1
  },
  parHeader: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignContent: 'center',
    backgroundColor: '#e5e5e5',
    borderWidth: 1
  },
  scoreRow: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignContent: 'center',
    backgroundColor: '#FFF',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1
  },
  tableCell: {
    minWidth: 34,
    maxWidth: 34,
    minHeight: 15,
    maxHeight: 15,
    marginVertical: 4,
    textAlign: 'center',
    fontSize: 10,
  },
  total: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: 25,
  }
});