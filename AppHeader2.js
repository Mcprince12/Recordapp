import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader2 extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>About Us</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'indigo',
  },
  text: {
    color: 'white',
    padding: 20,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AppHeader2;
