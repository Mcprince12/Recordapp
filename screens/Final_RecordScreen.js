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
            list1: [],
            list2: [],
            list3:[],
        }
        this.conditionRef = null;
        this.idRef = null;
        this.vaccineRef = null;
        this.historyRef = null;
    }

    getConditionList = () =>
    {
        this.conditionRef = db.collection( "condition" )
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

    getIdList = () =>
    {
        this.idRef = db.collection( "id" )
            .where( 'username', '==', this.state.userId )
            .onSnapshot( ( snapshot ) =>
            {
                var list = snapshot.docs.map( ( doc ) => doc.data() )
                this.setState( {
                    list1:list,
                })
        })
    }

    getVaccineList = () =>
    {
        this.vaccineRef = db.collection( "vaccine" )
            .where( 'username', '==', this.state.userId )
            .onSnapshot( ( snapshot ) =>
            {
                var list = snapshot.docs.map( ( doc ) => doc.data() )
                this.setState( {
                    list2:list,
                })
        })
    }

    getHistoryList = () =>
    {
        this.historyRef = db.collection( "history" )
            .where( 'username', '==', this.state.userId )
            .onSnapshot( ( snapshot ) =>
            {
                var list = snapshot.docs.map( ( doc ) => doc.data() )
                this.setState( {
                    list3:list,
                })
        })
    }

    componentDidMount ()
    {
        this.getConditionList();
        this.getIdList();
        this.getVaccineList();
        this.getHistoryList();
    }

    componentWillUnmount ()
    {
        this.conditionRef();
        this.idRef();
        this.vaccineRef();
        this.historyRef();
    }

    keyExtractor = ( item, index ) => index.toString();

    renderItem = ( { item, i } ) =>
    {
        return (
            <View>
            <ListItem
                key={i}
                title={"Long Term Condition : "+item.name}
                    subtitle={item.date}
                    rightElement={
                        <TouchableOpacity
                            style={styles.delButton}
                            onPress={
                                () =>
                                {
                                    this.setState( {
                                        list:[],
                                    })
                                }
                            }
                        >
                            <Text style={{color:'aqua'}}>
                                Delete
                            </Text>
                        </TouchableOpacity>
                    }
                bottomDivider
            />
                </View>
        )
    }

    renderItem1 = ( { item, i } ) =>
    {
        return (
            <View>
              <ListItem
      key={i}
      title={"Identification : "+item.name1}
                    subtitle={item.date1}
                    rightElement={
    <TouchableOpacity
        style={styles.delButton}
        onPress={
            () =>
            {
                this.setState( {
                    list1:[],
                })
            }
        }
    >
        <Text style={{color:'aqua'}}>
            Delete
        </Text>
    </TouchableOpacity>
}
      bottomDivider
                />
                </View>
        )
    }


    renderItem2 = ( { item, i } ) =>
    {
        return (
            <View>
              <ListItem
      key={i}
      title={"Vaccine : "+item.name2}
                    subtitle={item.date2}
                    rightElement={
    <TouchableOpacity
        style={styles.delButton}
        onPress={
            () =>
            {
                this.setState( {
                    list2:[],
                })
            }
        }
    >
        <Text style={{color:'aqua'}}>
            Delete
        </Text>
    </TouchableOpacity>
}
      bottomDivider
                />
                </View>
        )
    }

    renderItem3 = ( { item, i } ) =>
{
    return (
        <View>
          <ListItem
  key={i}
  title={"Medication History : "+item.name3}
                subtitle={item.date3}
                rightElement={
    <TouchableOpacity
        style={styles.delButton}
        onPress={
            () =>
            {
                this.setState( {
                    list3:[],
                })
            }
        }
    >
        <Text style={{color:'aqua'}}>
            Delete
        </Text>
    </TouchableOpacity>
}
  bottomDivider
            />
            </View>
    )
}
    render ()
    {
        return (
            <View style={{ flex: 1 }}>
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
                <View style={{ flex: 1 }}>
                    {
                        this.state.list.length === 0
                            ? (
                                <View style={styles.subContainer}>
                                    <Text style={{ fontSize:20}}>
                                        List of All Submitted Information
                                        </Text>
                                    </View>
                            ) : (
                                <View>

                                    <FlatList
                                        keyExtractor={
                                            this.keyExtractor
                                        }
                                        data={
                                            this.state.list1
                                        }
                                        renderItem={
                                            this.renderItem1
                                        }
                                    />
                                    
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

                                    

                                    <FlatList
                                        keyExtractor={
                                            this.keyExtractor
                                        }
                                        data={
                                            this.state.list2
                                        }
                                        renderItem={
                                            this.renderItem2
                                        }
                                    />

                                    <FlatList
                                        keyExtractor={
                                            this.keyExtractor
                                        }
                                        data={
                                            this.state.list3
                                        }
                                        renderItem={
                                            this.renderItem3
                                        }
                                    />
                                    </View>
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
    
 delButton:{
  width:100,
  height:30,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:"#ff5722",
  shadowColor: "#000",
  shadowOffset: {
     width: 0,
     height: 8
   },
  elevation : 16
},
})