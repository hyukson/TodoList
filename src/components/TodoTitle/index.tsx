import React from 'react';

import { TodoTitleStyled } from './styled';

interface TodoTitleTypes {
  title: string
}

const TodoTitle = ({ title }: TodoTitleTypes) => {
  return (
    <TodoTitleStyled>
      { title }
    </TodoTitleStyled>
  );
}

export default TodoTitle;