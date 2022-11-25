import React, {Component} from "react";
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import Search from "../components/Search";


class Teams extends Component {

    constructor(props){
        super(props);
        this.state = {
            teams: [],
            players: []
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.fantasynerds.com/v1/nba/teams?apikey=TEST")
        const teamData = await data.json();
        this.setState({
            teams: teamData
        });

    
    }

    goToArticle(logo_standard, team_name, team_code){
        this.props.navigation.navigate('SelectedTeam',{
            LOGO: logo_standard,
            NAME: team_name,
            CODE: team_code
        })
    }

    render(){

        const {teams} = this.state;

        return(
            <View style = {styles.container}>
                <Search />
                <FlatList
                    data={teams} renderItem={({ item }) => (
                        <TouchableOpacity style={styles.newsDataContainer} onPress={this.goToArticle.bind(this,
                            item.logo_standard,
                            item.team_name,
                            item.team_code
                            
                        )}>
                            <View style={styles.teamDataContainer}>
                                <View style={styles.itemContainer}>
                                    <View style={styles.row}>
                                        <Image source={{uri: `${item.logo_standard}`}} style={styles.logo}/>
                                        <Text style={styles.name}>{item.team_name}</Text>
                                        <Text style={styles.code}>{item.team_code}</Text>
                                    </View>
                                </View>
                                <View style={styles.seperator}></View>
                            </View>
                        </TouchableOpacity>
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
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: 'none',
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    code:{
        fontSize: 15,
        paddingVertical: 15,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: 'white'
    },
    seperator:{
        borderColor: 'gray',
        borderBottomWidth: 1,
        minWidth: '100%'
    },
    logo: {
        width: 45,
        height: 45
    },
    name:{
        fontSize: 15,
        paddingVertical: 15,
        fontWeight: 'bold',
        color: 'white'
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

export default Teams;