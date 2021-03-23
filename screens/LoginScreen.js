import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, KeyboardAvoidingView, ScrollView } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import AppHeader from '../AppHeader';
import WelcomeScreen from './WelcomeScreen';

export default class LoginScreen extends React.Component
{
    constructor ()
    {
        super();
        this.state = {
            username: '',
            password: '',
            isRegisterVisible: false,
            firstName: '',
            lastName: '',
            telephone: '',
            address: '',
            confirmedPassword: '',
        }
    }
    
    showModal = () =>
    {
        <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.isRegisterVisible}
        >
            <View style={styles.modalContainer}>
                <ScrollView style={{width:'100%'}}>
                    <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                        <Text style={styles.modalTitle}>
                            Resgistration
                        </Text>
                        <TextInput
                            style={styles.formTextInput}
                            placeholder={"First Name"}
                            maxLength={8}
                            onChangeText={(text)=>{
                                this.setState({
                                    firstName:text,
                                })
                            }}
                        />
                         <TextInput
                            style={styles.formTextInput}
                            placeholder={"abc@example.com"}
                            keyboardType={"email-address"}
                            onChangeText={(text)=>{
                                this.setState({
                                    username:text,
                                })
                            }}
                        />
                         <TextInput
                            style={styles.formTextInput}
                            placeholder={"Last Name"}
                            maxLength={8}
                            onChangeText={(text)=>{
                                this.setState({
                                    lastName:text,
                                })
                            }}
                        />
                        <TextInput
                            style={styles.formTextInput}
                            placeholder={"Phone Number"}
                            maxLength={10}
                            keyboardType={"numeric"}
                            onChangeText={(text)=>{
                                this.setState({
                                    telephone:text,
                                })
                            }}
                        />
                         <TextInput
                            style={styles.formTextInput}
                            placeholder={"Address"}
                            multiline={true}
                            onChangeText={(text)=>{
                                this.setState({
                                    address:text,
                                })
                            }}
                        />
                        <TextInput
                            style={styles.formTextInput}
                            placeholder={"Password"}
                            secureTextEntry={true}
                            onChangeText={(text)=>{
                                this.setState({
                                    password:text,
                                })
                            }}
                        />
                        <TextInput
                            style={styles.formTextInput}
                            placeholder={"Confirm Password"}
                            secureTextEntry={true}
                            onChangeText={(text)=>{
                                this.setState({
                                    confirmedPassword:text,
                                })
                            }}
                        />
                        <View style={styles.modalBackButton}>
                            <TouchableOpacity
                                onPress={
                                    () =>
                                    {
                                        this.userSignUp(this.state.username, this.state.password)
                                    }
                                }
                            >
                                <Text style={styles.registerButtonText}>
                                    Register
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.modalBackButton}>
                            <TouchableOpacity style={styles.cancelButton}
                                onPress={
                                    () =>
                                    {
                                        this.setState( {
                                            isRegisterVisible:false,
                                        })
                                    }
                                }
                            >
                                <Text>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        </Modal>
    }
    userLogin = (username, password) =>{
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then(()=>{
         this.props.navigation.navigate( 'WelcomeScreen' );
    })
    .catch((error)=>{
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage)
    } )
    }
    
    userSignUp = (username, password, confirmPassword) =>{
    if(password!==confirmPassword){
        return alert("Password does not match");
    } else {
        firebase.auth().createUserWithEmailAndPassword(username, password)
        .then((response)=>{
            db.collection('users').add({
                first_name:this.state.firstName,
                last_name:this.state.lastName,
                phone_number:this.state.telephone,
                username:this.state.username,
                address:this.state.address,
            })
            return alert("User added successfully",
            '',
            [
                {text:'OK', onPress:()=>{
                    this.setState({
                        isRegisterVisible:false
                    })
                }}
            ]
            );
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            return alert(errorMessage);
        })
    }
    }
    render ()
    {
        return (
            <View style={styles.container}>
                <AppHeader />
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    {this.showModal()}
                </View>
                
                <View style={{alignContent:'center'}}>
                    <Image
                        source={require( '../assets/rc.png' )}
                        style={{width:200, height:200}}
                    />
                </View>
                <View style={{alignItems:'center'}}>
                    <TextInput
                        style={styles.loginBox}
                        placeholder="Username"
                        keyboardType="email-address"
                        onChangeText={
                            (text) =>
                            {
                                this.setState( {
                                    username:text,
                                })
                            }
                        }
                    />
                    <TextInput
                        placeholder="password"
                        style={styles.loginBox}
                        secureTextEntry={true}
                        onChangeText={
                            (text) =>
                            {
                                this.setState( {
                                    password:text
                                })
                            }
                        }
                    />
                </View>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity
                        style={[ styles.button, { marginBottom: 10 } ]}
                        onPress={
                            () =>
                            {
                                this.userLogin( this.state.username, this.state.password )
                            }
                        }
                    >
                        <Text style={{color:'teal', fontSize:18, fontWeight:'bold'}}>
                            Log In
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={
                            () =>
                            {
                                this.userSignUp(this.state.username, this.state.password)
                            }
                    }
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create( {
    container: {
        backgroundColor: 'teal',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 65,
        fontWeight: '300',
        paddingBottom: 30,
        color: 'black'
    },
    loginBox: {
        width: 300,
        height: 40,
        borderWidth: 2.5,
        borderColor: 'black',
        fontSize: 20,
        margin: 10,
        paddingLeft: 10
    },
    KeyboardAvoidingView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalTitle: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 30,
        color: 'teal',
        margin: 50,
    },
    modalContainer: {
        flex: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "black",
        marginRight: 30,
        marginLeft: 30,
        marginTop: 80,
        marginBottom: 80,
    },
    formTextInput: {
        width: "75%",
        height: 35,
        alignSelf: 'center',
        borderColor: 'aqua',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
    },
    registerButton: {
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 30,
    },
    registerButtonText: {
        color: 'teal',
        fontSize: 15,
        fontWeight: 'bold',
    },
    cancelButton: {
        width: 200,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    button: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: "black",
        shadowColor: "#000",
            shadowOffset: {
                width: 0, height: 8,
            },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10,
    },
    buttonText: {
        color: 'aqua',
        fontWeight: '200',
        fontSize: 20,
    }
} )