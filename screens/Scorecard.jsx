import { Text, View, Button, StyleSheet } from 'react-native';
import React from 'react';

const { useState } = React;

export default function Scorecard() {
  const holesFront = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const holesBack = [10, 11, 12, 13, 14, 15, 16, 17, 18];
  const yardsFront = [null, null, null, null, null, null, null, null, null];
  const yardsBack = [null, null, null, null, null, null, null, null, null];
  const parFront = [null, null, null, null, null, null, null, null, null];
  const parBack = [null, null, null, null, null, null, null, null, null];
  const scoreFront = [null, null, null, null, null, null, null, null, null];
  const scoreBack = [null, null, null, null, null, null, null, null, null];

  return (
    <View style={styles.container}>
      <Text>Scorecard</Text>
      <View style={styles.table}>
        <View style={styles.holesHeader}>
          <Text style={styles.tableCell}>Hole:</Text>
          {holesFront.map((hole) => {
            return <Text style={styles.tableCell}>{hole}</Text>
          })}
          <Text style={styles.tableCell}>OUT</Text>
        </View>
        <View style={styles.yardsHeader}>
          <Text style={styles.tableCell}>Yards:</Text>
          {yardsFront.map((yards) => {
            return <Text style={styles.tableCell}>{yards}</Text>
          })}
          <Text style={styles.tableCell}>Total</Text>
        </View>
        <View style={styles.parHeader}>
          <Text style={styles.tableCell}>Par:</Text>
          {parFront.map((par) => {
            return <Text style={styles.tableCell}>{par}</Text>
          })}
          <Text style={styles.tableCell}>Total</Text>
        </View>
        <View style={styles.scoreRow}>
          <Text style={styles.tableCell}>Score:</Text>
          {scoreFront.map((score) => {
            return <Text style={styles.tableCell}>{score === null ? '' : score}</Text>
          })}
          <Text style={styles.tableCell}>Total</Text>
        </View>
      </View>
      <View style={styles.table}>
        <View style={styles.holesHeader}>
          <Text style={styles.tableCell}>Hole:</Text>
          {holesBack.map((hole) => {
            return <Text style={styles.tableCell}>{hole}</Text>
          })}
          <Text style={styles.tableCell}>IN</Text>
        </View>
        <View style={styles.yardsHeader}>
          <Text style={styles.tableCell}>Yards:</Text>
          {yardsBack.map((yards) => {
            return <Text style={styles.tableCell}>{yards}</Text>
          })}
          <Text style={styles.tableCell}>Total</Text>
        </View>
        <View style={styles.parHeader}>
          <Text style={styles.tableCell}>Par:</Text>
          {parBack.map((par) => {
            return <Text style={styles.tableCell}>{par}</Text>
          })}
          <Text style={styles.tableCell}>Total</Text>
        </View>
        <View style={styles.scoreRow}>
          <Text style={styles.tableCell}>Score:</Text>
          {scoreBack.map((score) => {
            return <Text style={styles.tableCell}>{score === null ? '' : score}</Text>
          })}
          <Text style={styles.tableCell}>Total</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  table: {
    marginVertical: 2
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
    minWidth: 32,
    maxWidth: 32,
    marginVertical: 4,
    textAlign: 'center',
    fontSize: 10,
  }
});