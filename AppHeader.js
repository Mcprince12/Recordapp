import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Your Universal Medpass</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'fuschia',
  },
  text: {
    color: 'white',
    padding: 20,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AppHeader;
