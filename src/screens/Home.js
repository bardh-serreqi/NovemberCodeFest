import React, {Component} from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';


class Home extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../images/logo.png')} style={styles.logo}/>
                <View style= {styles.btnContainer}>
                    <TouchableOpacity  style={styles.navBtn} onPress={() => this.props.navigation.navigate('Teams')}>
                        <Text style={styles.btnText}>Teams</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.navBtn} onPress={() => this.props.navigation.navigate('Players')}>
                        <Text style={styles.btnText}>Players</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.navBtn} onPress={() => this.props.navigation.navigate('Games')}>
                        <Text style={styles.btnText}>Games</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.navBtn} onPress={() => this.props.navigation.navigate('News')}>
                        <Text style={styles.btnText}>News</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#2b2c2d',
        // alignItems: 'center'
    },
    logo: {
        width: 400,
        height: 45,
        marginVertical: 125
    },
    btnContainer: {
        alignItems: 'center'
    },
    navBtn: {
        marginVertical: 8,
        borderRadius: 30,
        backgroundColor: '#4681f4',
        width: '80%',
        // borderWidth: 1,
        // borderColor: 'white'
    },
    btnText: {
        padding: 15,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }
})

export default Home;