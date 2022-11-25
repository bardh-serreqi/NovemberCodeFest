import React, {Component} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

class SelectedTeam extends Component{

    constructor(props){
        super(props)
        this.state = {
            logo_standard: null,
            team_name: '',
            team_code: '',
        }
    }

        async componentDidMount(){
            this.setState({
                logo_standard: this.props.route.params.LOGO,
                team_name: this.props.route.params.NAME,
                team_code: this.props.route.params.CODE,

            })
        }


    render(){
        return(
            <View style={styles.container}>
                <View style={[styles.header, styles.row]}>
                    <Image source={{uri: `${this.state.logo_standard}`}} style={styles.logo}/>
                    <Text style={styles.teamName}>{this.state.team_name}</Text>
                </View>
                <View style={styles.playerContainer}>
                    <View style={[styles.playerRow, styles.PGPos]}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../images/player.png')} style={styles.image}/>
                        </View>
                        <Text style={styles.playerName}>{this.state.team_code} Point Guard</Text>
                    </View>
                    <View style={styles.seperator}></View>
                    <View style={styles.playerRow}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../images/player.png')} style={styles.image}/>
                            </View>
                        <Text style={styles.playerName}>{this.state.team_code} Shooting Guard</Text>
                    </View>
                    <View style={styles.seperator}></View>
                    <View style={styles.playerRow}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../images/player.png')} style={styles.image}/>
                        </View>
                        <Text style={styles.playerName}>{this.state.team_code} Small Forward</Text>
                    </View>
                    <View style={styles.seperator}></View>
                    <View style={styles.playerRow}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../images/player.png')} style={styles.image}/>
                        </View>
                        <Text style={styles.playerName}>{this.state.team_code} Power Forward</Text>
                    </View>
                    <View style={styles.seperator}></View>
                    <View style={[styles.playerRow, styles.centerPos]}>
                        <View style={styles.imageContainer}>
                            <Image source={require('../images/player.png')} style={styles.image}/>
                        </View>
                        <Text style={styles.playerName}>{this.state.team_code} Center</Text>
                    </View>
                    <View style={styles.seperator}></View>
                </View>
           </View>


        );
        

    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2b2c2d',
    },
    header:{
        backgroundColor: '#404345',
        justifyContent: 'center',
        width: '100%',
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    teamName:{
        color: 'lightgrey',
        paddingTop: '8%',
        marginRight: '20%',
        fontSize: 20,
        fontWeight: 'bold',
    },
    playerContainer: {
        flex: 1,
        paddingVertical: 10,
        width: '100%',
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    playerRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 25
    },
    imageContainer: {
        paddingLeft: 20
    },
    image:{
        width: 65,
        height: 65,
        borderRadius: 50
    },
    seperator:{
        borderColor: 'grey',
        borderBottomWidth: 1,
        minWidth: '100%'
    },
    logo:{
        width: 85,
        height: 85
    },
    playerName: {
        color: 'white',
        paddingTop: '5%',
        paddingHorizontal: '25%',
        textAling: 'center'
    },
    centerPos:{
        paddingRight: '5%'
    },
})

export default SelectedTeam;