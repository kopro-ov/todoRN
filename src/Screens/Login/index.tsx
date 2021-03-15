import React from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { Button, TextInput } from 'react-native-paper';

function LoginScreen() {
    return (
        <>            
            <TextInput 
                label="Your Email" 
                placeholder="test@gemail.com" 
            />

            <TextInput 
                label="Your Password" 
                placeholder="password"
                secureTextEntry
            />

            <Button>
                Sign In
            </Button>
        </>
    )
}

const Stack = createStackNavigator();

function Login() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      );
};

export default Login;
