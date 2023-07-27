import { Text, View, Button, StyleSheet, ScrollView, Pressable, Modal, TextInput } from 'react-native';
import React from 'react';
import axios from 'axios';

const { useState, useEffect } = React;

export default function EquipmentScreen() {
  const [clubs, setClubs] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [newClubType, setNewClubType] = useState(null);
  const [newClubDistance, setNewClubDistance] = useState(null);
  const [editClub, setEditClub] = useState(null);

  const fetchClubs = async () => {
    let response = await axios.get('http://localhost:3000/forescore/clubs');
    setClubs(response.data);
  };

  const handleAddClub = async () => {
    let body = {
      type: newClubType,
      distance: newClubDistance
    };
    await axios.post('http://localhost:3000/forescore/clubs', body);
    setModalVisible(false);
    setNewClubType(null);
    setNewClubDistance(null);
    fetchClubs();
  };

  const handleUpdateClub = async () => {
    let body = {
      type: newClubType,
      distance: newClubDistance
    };
    await axios.put(`http://localhost:3000/forescore/clubs/${editClub}`, body);
    setEditModalVisible(false);
    setNewClubType(null);
    setNewClubDistance(null);
    setEditClub(null);
    fetchClubs();
  };

  const handleDeleteClub = async () => {
    await axios.delete(`http://localhost:3000/forescore/clubs/${editClub}`);
    setEditModalVisible(false);
    setNewClubType(null);
    setNewClubDistance(null);
    setEditClub(null);
    fetchClubs();
  };

  useEffect(() => {
    fetchClubs();
  }, []);

  return (
    <View style={styles.container}>
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
            <View style={styles.modalRowView}>
              <TextInput
                style={styles.modalTextInput}
                placeholder='Club Type'
                onChangeText={setNewClubType}
                value={newClubType}
              />
              <TextInput
                style={styles.modalTextInput}
                placeholder='Distance (Yards)'
                onChangeText={setNewClubDistance}
                value={newClubDistance}
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.modalRowView}>
              <Pressable
                style={styles.modalAddButton}
                onPress={handleAddClub}
              >
                <Text>Add</Text>
              </Pressable>
              <Pressable
                style={styles.modalCancelButton}
                onPress={() => {
                  setModalVisible(false);
                  setNewClubType(null);
                  setNewClubDistance(null);
                }}
              >
                <Text>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.button}>
        <Button
          title="Add a Club"
          onPress={() => setModalVisible(true)}
          color='#FFF'
        />
      </View>
      <View style={styles.clubListView}>
        <ScrollView>
          {clubs.map(club => {
            return (
              <Pressable
                key={club._id}
                onPress={() => {
                  setNewClubType(club.type);
                  setNewClubDistance(club.distance);
                  setEditClub(club._id);
                  setEditModalVisible(true);
                }}
              >
                <View style={styles.clubRowView}>
                  <Text>{`${club.type}:  `}</Text>
                  <Text>{`${club.distance} Yards    ✎`}</Text>
                </View>
              </Pressable>
            )
          })}
        </ScrollView>
      </View>
      <Modal
        animationType='fade'
        transparent={true}
        visible={editModalVisible}
        onRequestClose={() => {
          setEditModalVisible(!editModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalRowView}>
              <TextInput
                style={styles.modalTextInput}
                placeholder='Club Type'
                onChangeText={setNewClubType}
                value={newClubType}
              />
              <TextInput
                style={styles.modalTextInput}
                placeholder='Distance (Yards)'
                onChangeText={setNewClubDistance}
                value={newClubDistance ? newClubDistance.toString() : newClubDistance}
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.modalRowView}>
              <Pressable
                style={styles.modalAddButton}
                onPress={() => {
                  handleUpdateClub();
                }}
              >
                <Text>Save</Text>
              </Pressable>
              <Pressable
                style={styles.modalAddButton}
                onPress={() => {
                  setEditModalVisible(false);
                  setNewClubType(null);
                  setNewClubDistance(null);
                  setEditClub(null);
                }}
              >
                <Text>Cancel</Text>
              </Pressable>
              <Pressable
                style={styles.modalCancelButton}
                onPress={() => {
                  handleDeleteClub();
                }}
              >
                <Text>Delete</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20
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
  modalTextInput: {
    marginHorizontal: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DAD7CD',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  modalRowView: {
    flexDirection: 'row',
    marginVertical: 10
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
  modalAddButton: {
    margin: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#A3B18A',
    borderColor: '#344E41'
  },
  modalCancelButton: {
    margin: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FF4A1C',
    borderColor: '#344E41'
  },
  button: {
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    maxWidth: 150,
    minWidth: 150,
    backgroundColor: '#588157',
    borderColor: '#344E41'
  }
});