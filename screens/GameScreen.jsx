import { Text, View, Button, StyleSheet, TextInput, Pressable, Modal } from 'react-native';
import React from 'react';
import axios from 'axios';

import Scorecard from './components/Scorecard.jsx';
import GameInput from './components/GameInput.jsx';

const { useState, useEffect } = React;

export default function GameScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [clubs, setClubs] = useState([]);
  const [course, setCourse] = useState('');
  const [ready, setReady] = useState(false);
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

  const handleEndGame = async () => {
    try {
      let body = {course, yards, pars, scores};
      let res = await axios.post('http://localhost:3000/forescore/games', body);
      if (res.status === 201) {
        navigation.navigate('Home');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchClubs = async () => {
    let response = await axios.get('http://localhost:3000/forescore/clubs');
    setClubs(response.data);
  };

  useEffect(() => {
    fetchClubs();
  }, []);

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
        <View style={styles.controls}>
          <View style={styles.clubsButton}>
            <Button
              title="View Clubs"
              color="#FFF"
              onPress={() => { setModalVisible(true) }}
            />
          </View>
          <View style={styles.endButton}>
            <Button
              title="End Game"
              color="#FFF"
              onPress={handleEndGame}
            />
          </View>
        </View>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalList}>
              {clubs.map(club => {
                return (
                  <View style={styles.clubRowView}>
                    <Text>{`${club.type}:  `}</Text>
                    <Text>{`${club.distance} Yards`}</Text>
                </View>
                )
              })}
            </View>
            <View style={styles.modalControl}>
              <Pressable
                style={styles.modalCancelButton}
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
    backgroundColor: '#FFF'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  controls: {
    flex: 1,
    justifyContent: 'space-between'
  },
  endButton: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#344E41',
    marginBottom: 25,
    backgroundColor: '#FF4A1C'
  },
  clubsButton: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#344E41',
    marginTop: 15,
    minWidth: 120,
    backgroundColor: '#588157'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    minWidth: 325,
    maxWidth: 325,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  clubListView: {
    marginTop: 20
  },
  clubRowView: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: '#DAD7CD'
  },
  modalControl: {
    marginTop: 25
  },
  modalCancelButton: {
    margin: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#588157',
    borderColor: '#344E41'
  },
});