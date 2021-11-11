import React from 'react';

import { TodoListStyled } from './styled';

interface TodoListTypes {
  children: JSX.Element[]
}

const TodoList = ({ children }: TodoListTypes) => {
  return (
    <TodoListStyled>
      {children}
    </TodoListStyled>
  );
}

export default TodoList;