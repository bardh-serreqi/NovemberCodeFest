import React, {Component} from "react";
import { StyleSheet, View, Image, Text, FlatList, TextInput} from 'react-native';
import Search from "../components/Search";
class Games extends Component {

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
        const data = await fetch('https://free-nba.p.rapidapi.com/games?page=0&per_page=15', options);
        const jsonData = await data.json();
        this.setState({
            games: jsonData["data"],
        });
    }

    render(){

        const {games} = this.state;

        return(
            <View style = {styles.container}>
                <Search />
                <FlatList
                    data={games} renderItem={({ item }) => (
                        <View style={styles.playerDataContainer}>
                            <View style={styles.itemContainer}>
                                <View style={styles.row}>
                                    <Text style={styles.name}>{item["home_team"].abbreviation} vs {item["visitor_team"].abbreviation}</Text>
                                    <Text style={styles.code}>{item.home_team_score} - {item.visitor_team_score}</Text>
                                </View>
                                <View style={styles.row}>
                                <Text style={styles.date}>Date: {item.date}</Text>
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
    date:{
        fontSize: 15,
        paddingVertical: 15,
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
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

export default Games;