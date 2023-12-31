import { Text, View, StyleSheet } from 'react-native';

export default function Header() {

  return (
    <View style={styles.headerBar}>
      <View>
        <Text style={styles.headerText}>Fore Score</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  headerBar: {
    flex: 1,
    backgroundColor: '#588157',
    justifyContent: 'center',
    maxHeight: 90,
  },
  headerText: {
    textAlign: 'center',
    marginTop: 50,
    color: '#DAD7CD',
    fontSize: 24,
  }
});