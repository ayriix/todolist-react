import { ToDo } from "../../../models/todo-item";
import {
  TodoItem,
  TodoItemControl,
  TodoItemControls,
  TodoItemText,
} from "./TodolistItem.styled";
import checkIcon from "../../../assets/images/check.png";
import uncheckIcon from "../../../assets/images/uncheck.png";
import trashIcon from "../../../assets/images/trash.png";

export const TodolistItem = (props: {
  todoItem: ToDo;
  updateTodo: Function;
  deleteTodo: Function;
}) => {
  return (
    <TodoItem>
      <TodoItemText>{props.todoItem.text}</TodoItemText>
      <TodoItemControls className="todo-list-item__buttons">
        <TodoItemControl
          icon={trashIcon}
          onClick={() => props.deleteTodo(props.todoItem)}
        ></TodoItemControl>
        <TodoItemControl
          icon={props.todoItem.isDone ? checkIcon : uncheckIcon}
          onClick={() => props.updateTodo(props.todoItem)}
        ></TodoItemControl>
      </TodoItemControls>
    </TodoItem>
  );
};
