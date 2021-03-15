import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styled from 'styled-components/native';

import { TodoListContextProvider } from '~/Context/TodoListContext';

import Home from './Home';
import Todo from './Todo';
import Login from './Login';

const Tab = createBottomTabNavigator();

const Container = Styled.View`
  flex : 1;
  background-color = #EEE;
`;

class TodoList extends Component {
    render () {
        return (
            <TodoListContextProvider>
                <Container>
                    <Todo />
                </Container>
            </TodoListContextProvider>
        )
    }
}

const ScreenNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon : ({ focused }) => {
                        let iconName;
                        if(route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline'
                        }

                        if(route.name === "Todo") {
                            iconName = focused ? 'today' : 'today-outline'
                        }

                        if(route.name === "Login") {
                            iconName = focused ? 'person' : 'person-outline'
                        }

                        return <Ionicons name={iconName} size={30}  color='#222'/>;
                    }
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Todo" component={TodoList} />
                <Tab.Screen name="Login" component={Login} />
            </Tab.Navigator>
        </NavigationContainer>    
    )
};

export default ScreenNavigator;