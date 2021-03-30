import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import AppHeader from '../AppHeader';

export default class Final_RecordScreen extends React.Component
{
    constructor ()
    {
        super();
        this.state = {
            userId: firebase.auth().currentUser.email,
            list: [],
        }
        this.ref = null;
    }

    getList = () =>
    {
        this.ref = db.collection( "condition" )
            .where( 'username', '==', this.state.userId )
            .onSnapshot( ( snapshot ) =>
            {
                var list = snapshot.docs.map( ( doc ) => doc.data() )
                console.log( list );
                this.setState( {
                    list: list,
                })
            } )
        
    }

    componentDidMount ()
    {
        this.getList();
    }

    componentWillUnmount ()
    {
        this.ref();
    }

    keyExtractor = ( item, index ) => index.toString();

    renderItem = ( { item, i } ) =>
    {
        return (
            <ListItem
                key={i}
                title={item.name}
                subtitle={item.date}
                bottomDivider
            />
        )
    }

    render ()
    {
        return (
            <View style={{ flex: 1 }}>
                <AppHeader />
                <View style={{ flex: 1 }}>
                    {
                        this.state.list.length === 0
                            ? (
                                <View style={styles.subContainer}>
                                    <Text style={{ fontSize:20}}>
                                        List of All Submitted Conditions
                                        </Text>
                                    </View>
                            ) : (
                                <FlatList
                                    keyExtractor={
                                        this.keyExtractor
                                    }
                                    data={
                                        this.state.list
                                    }
                                    renderItem={
                                        this.renderItem
                                    }
                                />
                        )
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create( {
    subContainer:{
        flex:1,
        fontSize: 20,
        justifyContent:'center',
        alignItems:'center'
    },
})