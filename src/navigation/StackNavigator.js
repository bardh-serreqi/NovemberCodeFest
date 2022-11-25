import React from "react";
import Home from "../screens/Home";
import News from "../screens/News";
import Article from "../screens/Article";
import Teams from "../screens/Teams";
import Players from "../screens/Players";
import SelectedTeam from "../screens/SelectedTeam";
import Games from "../screens/Games";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const screenOptionsStyle = {
    headerTitleAlign: 'center',
    headerStyle: {
        backgroundColor: '#2b2c2d',
        elevation: 0, 
    },
    headerTintColor: 'white'
}

const StackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={screenOptionsStyle}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Teams" component={Teams}/>
            <Stack.Screen name="SelectedTeam" component={SelectedTeam}/>
            <Stack.Screen name="Players" component={Players}/>
            <Stack.Screen name="Games" component={Games}/>
            <Stack.Screen name="News" component={News}/>
            <Stack.Screen name="Article" component={Article}/>
        </Stack.Navigator>
    );
}

export default StackNavigator;
