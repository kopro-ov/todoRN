import React, { Fragment } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import {
  Header, 
  LearnMoreLinks, 
  Colors, 
  DebugInstructions, 
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';

import Styled from 'styled-components/native';

import { TodoListContextProvider } from '~/Context/TodoListContext';
import Todo from './src/Screens/Todo';

const Container = Styled.View`
  flex : 1;
  background-color = #EEE;
`;

const App = () =>  {
  return (
    <TodoListContextProvider>
      <Container>
        <Todo />
      </Container>
    </TodoListContextProvider>
  );
};

export default App;
