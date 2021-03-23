import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import IdScreen from './screens/IdScreen';
import Final_RecordScreen from './screens/Final_RecordScreen';
import MedicationHistoryScreen from './screens/MedicationHistory';
import VaccineScreen from './screens/VaccineScreen';
import ConditionsScreen from './screens/ConditionsScreen';


export default class App extends React.Component{
  render ()
  {
    return (
      <View style={styles.container}>
        <AppContainer/>
      </View>
    )
  }
}

const SwitchNavigator = createSwitchNavigator( {
  LoginScreen: { screen: LoginScreen },
  WelcomeScreen: { screen: WelcomeScreen },
  IdScreen: { screen: IdScreen },
  Final_RecordScreen: { screen: Final_RecordScreen },
  MedicationHistoryScreen: { screen: MedicationHistoryScreen },
  VaccineScreen: { screen: VaccineScreen },
  ConditionsScreen:{screen:ConditionsScreen},
} )

const AppContainer = createAppContainer( SwitchNavigator );

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    
  },
});
