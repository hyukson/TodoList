import React, { ReactNode } from 'react';
import './styled.scss'; 

interface TodoListTypes {
  content: string,
  onRemove: any,
  onCompletion: any,
}

const TodoList = ({ content, onRemove, onCompletion }: TodoListTypes) => {
  return (
    <div className="Todo_item">
      <input type="checkbox" />
      <div className="Todo_content">
        {content}
      </div>
      <div className="Todo_btns">
        <div onClick={onRemove}>

        </div>
        <div onClick={onCompletion}>

        </div>
      </div>
    </div>
  );
}

export default TodoList;