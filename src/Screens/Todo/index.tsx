import React from 'react';
import { View, Text } from 'react-native';
import Styled from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TodoListContextProvider } from '~/Context/TodoListContext';
import TodoListView from './TodoListView';
import AddTodo from './AddTodo';

const Container = Styled.View`
    flex : 1;
`;

const Stack = createStackNavigator();

function TodoScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Todo Screen</Text>
        </View>
    )
}

interface Props {}

const Todo = ({ } : Props) => {
    return (        
        <Container>
            <TodoListView />
            <AddTodo />
        </Container>
    );
};

export default Todo;

