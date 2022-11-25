import React, {Component} from "react";
import { StyleSheet, View, Image, Text, FlatList, TextInput} from 'react-native';
import Search from "../components/Search";
class Players extends Component {

    constructor(props){
        super(props);
        this.state = {
            players: []
        }
    }

    async componentDidMount(){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c5ecc18c6emsh88fe36fec862ea7p134d90jsn6e5ed812c13f',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        };
        const data = await fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=15', options);
        const jsonData = await data.json();
        this.setState({
            players: jsonData["data"],
        });
    }

    render(){

        const {players} = this.state;

        return(
            <View style = {styles.container}>
                <Search />
                <View style={[styles.row, styles.tableContainer]}>
                    <Text style={styles.tablePl}>Player</Text>
                    <Text style={styles.tableN}>Name</Text>
                    <Text style={styles.tableT}>Team</Text>
                    <Text style={styles.tablePos}>Pos</Text>
                </View>
                <View style={styles.seperator}></View>
                <FlatList
                    data={players} renderItem={({ item }) => (
                        <View style={styles.playerDataContainer}>
                            <View style={styles.itemContainer}>
                                <View style={styles.row}>
                                    <Image source={require('../images/player.png')} style={styles.image}/>
                                    <Text style={styles.name}>{item.first_name} {item.last_name}</Text>
                                    <Text style={styles.code}>{item["team"].abbreviation}</Text>
                                    <Text style={styles.position}>{item.position}</Text>
                                </View>
                            </View>
                            <View style={styles.seperator}></View>
                        </View>
                )} />
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2b2c2d'
    },
    itemContainer: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: 'none',
        justifyContent: 'center'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name:{
        fontSize: 15,
        paddingVertical: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    seperator:{
        borderColor: 'grey',
        borderBottomWidth: 1,
        minWidth: '100%'
    },
    image:{
        width: 45,
        height: 45,
        borderRadius: 50
    },
    position:{
        fontSize: 15,
        paddingVertical: 15,
        color: 'white',
    },
    code:{
        fontSize: 15,
        paddingVertical: 15,
        justifyContent: 'center',
        color: 'white'
    },
    tableT:{
        color: 'white',
        paddingLeft: 55,
        fontWeight: 'bold'
    },
    tableN:{
        color: 'white',
        paddingLeft: 45,
        fontWeight: 'bold'
    },
    tablePl:{
        color: 'white',
        fontWeight: 'bold'
    },
    tablePos:{
        color: 'white',
        fontWeight: 'bold'
    },
    tableContainer:{
        backgroundColor: 'grey',
        width: '100%',
        padding: 15
    },
    search:{
        justifyContent: 'center',
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        width:'90%',
        marginTop: 10,
        marginBottom: 5,
        marginHorizontal: 7,
        height:40,
        padding: 5
    }
})

export default Players;