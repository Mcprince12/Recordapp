import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import AppHeader from '../AppHeader';
import firebase from 'firebase';
import db from '../config';

export default class IdScreen extends React.Component
{
    constructor ()
    {
        super();
        this.state = {
            info: '',
            date: '',
        }
    }

    updateInfo = () =>
    {
        console.log(this.state.info)
        db.collection( 'id' ).add( {
            name: this.state.info,
            date:firebase.firestore.FieldValue.serverTimestamp(),
        } )
        this.setState( {
            name: '',
            date:'',
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
                    source={require('../assets/id.jpeg')}
                    />
                </View>
                <View>
                <TextInput
                    style={styles.Box}
                    placeholder="Write your identification here and submit"
                    onChangeText={
                        (text) =>
                        {
                            this.setState( {
                              info:text,
                             })  
                        }
                    }
                        value={this.state.info}
                        multiline={true}
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
                    <Text style={styles.bottomText}>
                        *Note: Submit all Your Identification at Once.
                    </Text>
                    </View>
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
        height: 240,
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