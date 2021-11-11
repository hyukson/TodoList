import React from 'react';
import { TodoItemStyled } from './styled';

import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'; 

interface TodoListTypes {
  content: string,
  idx: number,
  onRemove: any,
  onCompletion: any,
}

const TodoList = ({ content, idx, onRemove, onCompletion }: TodoListTypes) => {

  return (
    <TodoItemStyled>
      <input type="checkbox" />
      <div className="Todo_content">
        {content}
      </div>
      <div className="Todo_btns">
        <div onClick={() => onCompletion(idx)}>
          <AiOutlineCheck style={{color: 'green'}} />
        </div>
        <div onClick={() => onRemove(idx)}>
          <AiOutlineClose style={{color: 'red'}} />
        </div>
      </div>
    </TodoItemStyled>
  );
}

export default TodoList;