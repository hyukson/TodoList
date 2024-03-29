import TodoItem from "../TodoItem";
import { TodoListStyled } from "./styled";

interface TodoListTypes {
  list: any[];
  onRemove: any;
  onCompletion: any;
}

const TodoList = ({ list, onRemove, onCompletion }: TodoListTypes) => {
  return (
    <TodoListStyled>
      {list.map((v) => (
        <TodoItem
          title={v.title}
          isComplete={v.isComplete}
          idx={v.idx}
          onRemove={onRemove}
          onCompletion={onCompletion}
          key={v.idx}
        />
      ))}
    </TodoListStyled>
  );
};

export default TodoList;
