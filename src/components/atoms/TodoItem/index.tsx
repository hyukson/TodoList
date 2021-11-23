import React from "react";
import { TodoItemStyled } from "./styled";

import { FaTrash } from "react-icons/fa";

interface TodoListTypes {
  content: string;
  idx: number;
  isComplete: boolean;
  onRemove: any;
  onCompletion: any;
}

const TodoList = ({
  content,
  idx,
  isComplete,
  onRemove,
  onCompletion,
}: TodoListTypes) => {
  return (
    <TodoItemStyled className={isComplete ? "complete" : ""}>
      <button onClick={() => onCompletion(idx)}>{isComplete ? "✓" : ""}</button>

      <div className="Todo_content">{content}</div>

      <div className="Todo_btns">
        <div onClick={() => onRemove(idx)}>
          <FaTrash style={{ color: "#ae80c7" }} />
        </div>
      </div>
    </TodoItemStyled>
  );
};

export default TodoList;
