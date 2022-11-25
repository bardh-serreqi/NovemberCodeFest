import React, {Component, useState} from "react";
import { StyleSheet, View, TouchableOpacity, Text, FlatList, TextInput} from 'react-native';
import Search from "../components/Search";


class News extends Component {

    constructor(props){
        super(props);
        this.state = {
            news: []
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.fantasynerds.com/v1/nba/news?apikey=TEST");
        const jsonData = await data.json();
        this.setState({
            news: jsonData,
        });
    }

    goToArticle(article_author, article_date, article_headline, article_link, article_excerpt){
        this.props.navigation.navigate('Article',{
            AUTHOR: article_author,
            DATE: article_date,
            HEADLINE: article_headline,
            LINK: article_link,
            EXCERPT: article_excerpt
        })
    }

    render(){

        const {news} = this.state;

        return(
            <View style = {styles.container}>
                {/* <View style={styles.search}><TextInput  placeholder='Search'/></View> */}
                <Search />
                <FlatList
                    // keyExtractor={news => news.article_date}
                    data={news} renderItem={({ item }) => (
                        <TouchableOpacity style={styles.newsDataContainer} onPress={this.goToArticle.bind(this,
                            item.article_author,
                            item.article_date,
                            item.article_headline,
                            item.article_link,
                            item.article_excerpt
                        )}>
                            <View style={styles.itemContainer}>
                                <View style={styles.row}>
                                <Text style={styles.headline}>{item.article_headline}</Text>
                            </View>
                                <View style={styles.row}>
                                    <Text style={styles.date}>{item.article_date}</Text>
                                </View>
                            </View>
                            <View style={styles.seperator}></View>
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
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        // borderWidth: 1,
        // borderColor: 'black'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headline:{
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 15
    },
    link:{
        textAlign: 'center',
        color: 'blue',
        paddingVertical: 10
    },
    newsDataContainer:{
        marginVertical: 5,
        marginHorizontal: 7
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

export default News;