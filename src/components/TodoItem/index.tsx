import React from "react";
import { TodoItemStyled } from "./styled";

import { FaTrash } from "react-icons/fa";

interface TodoListTypes {
  title: string;
  idx: number;
  isComplete: boolean;
  onRemove: any;
  onCompletion: any;
}

const TodoList = ({
  title,
  idx,
  isComplete,
  onRemove,
  onCompletion,
}: TodoListTypes) => {
  return (
    <TodoItemStyled className={isComplete ? "complete" : ""}>
      <button onClick={() => onCompletion(idx)}>{isComplete ? "✓" : ""}</button>

      <div className="Todo_content">{title}</div>

      <div className="Todo_btns">
        <div onClick={() => onRemove(idx)}>
          <FaTrash style={{ color: "#ae80c7" }} />
        </div>
      </div>
    </TodoItemStyled>
  );
};

export default TodoList;
