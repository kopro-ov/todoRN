import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        type="clear"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                type="clear"
                onPress={() => navigation.navigate('Details')}
            />
            <Button title="Go to Home" type="clear" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" type="clear" onPress={() => navigation.goBack()} />
        </View>
    );
}

const Stack = createStackNavigator();

function Home() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default Home;