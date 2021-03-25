import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import AppHeader from '../AppHeader';

export default class WelcomeScreen extends React.Component
{
    render ()
    {
        return (
            <View style={styles.cont}>
                <AppHeader />
                <View>
                <Text style={styles.HeaderText}>
                    Welcome! Please Click any Button to Put in Information!
                </Text>
                </View>
                <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={
                        () =>
                        {
                            this.props.navigation.navigate('IdScreen')
                        }
                    }
                >
                    <Text style={styles.buttonText}>
                            Identification
                    </Text>
                    
                
                </TouchableOpacity>
</View><View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={
                        () =>
                        {
                            this.props.navigation.navigate('ConditionsScreen')
                        }
                    }
                >
                    <Text style={styles.buttonText}>
                        Diseases/Long Term Conditions
                    </Text>
                </TouchableOpacity>
</View><View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={
                        () =>
                        {
                            this.props.navigation.navigate('VaccineScreen')
                        }
                    }
                >
                    <Text style={styles.buttonText}>
                        Vaccines
                    </Text>
                </TouchableOpacity>
</View><View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={
                        () =>
                        {
                            this.props.navigation.navigate('MedicationHistoryScreen')
                        }
                    }
                >
                    <Text style={styles.buttonText}>
                        Medication History
                    </Text>
                </TouchableOpacity>
</View><View>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor:'blue'}]}
                    onPress={
                        () =>
                        {
                            this.props.navigation.navigate('Final_RecordScreen')
                        }
                    }
                >
                    <Text style={styles.buttonText}>
                        Your Final Record
                    </Text>
                    </TouchableOpacity>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create( {
    HeaderText: {
        textAlign: 'center',
        fontSize: 30,
        color: 'red',
        fontWeight:'bold',
    },
    cont: {
        flex:1,
        backgroundColor: 'teal',
        justifyContent: 'center',
        alignItems:'center',
    },
    button: {
        backgroundColor: 'aqua',
        borderRadius: 20,
        width: 150,
        height: 90,
        marginTop: 20,
        marginBottom:35,
    },
    buttonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop:30,
    }
})