import React, { Fragment } from 'react';
import Navigator from '~/Screens/Navigator';

import Styled from 'styled-components/native';

import { TodoListContextProvider } from '~/Context/TodoListContext';
import Todo from './src/Screens/Todo';

const Container = Styled.View`
  flex : 1;
  background-color = #EEE;
`;

const App = () =>  {
  return (
    <>
      {/** 
      <TodoListContextProvider>
        <Container>
          <Todo />
        </Container>
      </TodoListContextProvider>
      */}
      <Navigator />
    </>
  );
};

export default App;
