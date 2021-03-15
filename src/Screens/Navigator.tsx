import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import Todo from './Todo'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const TodoNavigator = () => {
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

                        return <Ionicons name={iconName} size={30}  color={Colors.tabIconSelected}/>;
                    }
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Todo" component={Todo} />
            </Tab.Navigator>
        </NavigationContainer>    
    )
};

export default TodoNavigator;