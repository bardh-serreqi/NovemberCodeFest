import React, {Component} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Flatlist, Text } from 'react-native';

class Article extends Component{

    constructor(props){
        super(props)
        this.state = {
            article_date: '',
            article_author: '',
            article_headline: '',
            article_link: '',
            article_excerpt: '',
        }
    }

        async componentDidMount(){
            this.setState({
                article_date: this.props.route.params.DATE,
                article_author: this.props.route.params.AUTHOR,
                article_headline: this.props.route.params.HEADLINE,
                article_link: this.props.route.params.LINK,
                article_excerpt: this.props.route.params.EXCERPT,
            })
        }


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headline}>{this.state.article_headline}</Text>
                    <View style={styles.row}>
                        <Text style={styles.author}>{this.state.article_author}</Text>
                        <Text style={styles.date}>{this.state.article_date}</Text>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.excerpt}>
                        {this.state.article_excerpt}
                        . Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Text>
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
    itemContainer: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headline:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: 'white'
    },
    author:{
        color: 'white'
    },
    date:{
        color: 'white'
    },
    excerpt:{
        marginVertical: 100,
        color: 'white',
        fontSize: 15,
    },
    header:{
        backgroundColor: '#404345',
        justifyContent: 'center',
        width: '100%',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        padding: 5
    },
})

export default Article;