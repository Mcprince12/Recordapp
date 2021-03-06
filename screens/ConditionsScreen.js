import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import AppHeader from '../AppHeader';
import firebase from 'firebase';
import db from '../config';

export default class ConditionsScreen extends React.Component
{
    constructor ()
    {
        super();
        this.state = {
            info: '',
            date: '',
            username: firebase.auth().currentUser.email,
        }
    }

    updateInfo = () =>
    {
        console.log(this.state.info)
        db.collection( 'condition' ).add( {
            name: this.state.info,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            username: this.state.username,
        } )
        this.setState( {
            name: '',
            date: '',
            username:'',
        } )
        alert( 'Successfully Submitted' );
    }

    render ()
    {
        return (
            <View style={styles.container}>
                <AppHeader />
                <View>
                <TouchableOpacity
                    style={styles.BackButton}
                    onPress={
                        () =>
                        {
                            this.props.navigation.navigate('WelcomeScreen')
                        }
                    }
                >
                    <Text style={styles.BackButtonText}>
                        Back
                    </Text>
                    </TouchableOpacity>
                </View>
                <View>
                <Text style={styles.HeaderText}>
                    Input Information in the Box Below:
                </Text>
                <Image
                    style={styles.img}
                    source={require('../assets/condition.jpeg')}
                    />
                </View>
                <View>
                <TextInput
                    style={styles.Box}
                    placeholder="Write any Condition Here and submit"
                    onChangeText={
                        (text) =>
                        {
                            this.setState( {
                              info:text,
                             })  
                        }
                    }
                        value={this.state.info}
                    />
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={
                           ()=>{
                            this.updateInfo()
                           } 
                        }
                        >
                        <Text style={styles.submitButtonText}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    </View>
                <Text style={styles.bottomText}>
                    *Note: If you have multiple conditions, submit them one by one.
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create( {
    BackButton: {
        backgroundColor: 'red',
        borderRadius: 20,
        width: 100,
        height: 40,
        marginTop: 15,
    },
    BackButtonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        margin:10,
    },
    container: {
        flex:1,
        backgroundColor: 'teal',
    },
     Box: {
        width: 350,
        height: 40,
        borderWidth: 2.5,
        borderColor: 'black',
        fontSize: 20,
        margin: 50,
        paddingLeft: 10,
        alignSelf:'center',
    },
        HeaderText: {
        textAlign: 'center',
        fontSize: 30,
        color: 'red',
        fontWeight:'bold',
    },
    submitButton: {
        backgroundColor: '#90ee90',
        borderRadius: 20,
        width: 200,
        height: 80,
        marginTop: 15,
        marginLeft:700,
    },
    submitButtonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 27,
        margin:25,
    },
    bottomText: {
        fontSize: 20,
        marginLeft: 500,
        margin:50,
    },
    img: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop:50,
    }
})