import { Text, View, StyleSheet } from 'react-native';

export default function Footer() {

  return (
    <View style={styles.footerBar}></View>
  );
};

const styles = StyleSheet.create({
  footerBar: {
    flex: 1,
    backgroundColor: '#588157',
    justifyContent: 'center',
    maxHeight: 80,
  }
});