import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AppHeader2 from '../AppHeader2';

export default class AboutUsScreen extends React.Component
{
    render ()
    {
        return (
            <View style={{ flex: 1,  alignItems: 'center', backgroundColor:'teal' }}>
                <AppHeader2 />
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
                
                <Image
                    style={{ width: 200, height: 250, marginTop:50}}
                    source={require('../assets/File_000.jpeg')}
                />
                <Text style={{textAlign:'center', textAlignVertical:'center', fontSize:'44', fontFamily:'Times New Roman', marginTop:50}}>
                    Hello! My name is Sohum. I am 14 years old and I am delighted to be sharing this app that will improve your convenience when writing medical records. 
                    I am fluent in Javascript, HTML, CSS, and JSX. I have also designed various other apps such as a wireless library app and a book donations app. 
                    Feel free to contact me at sohumtrip@gmail.com. My gitHub username is McPrince12.
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
    marginTop: 50,
    },
    BackButtonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        margin:10,
    },
})