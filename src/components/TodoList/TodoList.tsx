import { TodolistItem } from "./TodolistItem/TodolistItem";
import { ToDo } from "../../models/todo-item";
import { TodoContainer, TodoListItem } from "./TodoList.styled";

export const TodoList = (props: {
  todos: ToDo[];
  updateTodo: Function;
  deleteTodo: Function;
}) => {
  const checkedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item) => {
        return (
          <TodolistItem
            todoItem={item}
            key={item.id}
            updateTodo={props.updateTodo}
            deleteTodo={props.deleteTodo}
          />
        );
      });
  };
  const uncheckedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item) => {
        return (
          <TodolistItem
            todoItem={item}
            key={item.id}
            updateTodo={props.updateTodo}
            deleteTodo={props.deleteTodo}
          />
        );
      });
  };

  return (
    <TodoContainer>
      <TodoListItem className="failed">{checkedList()}</TodoListItem>
      <TodoListItem className="completed">{uncheckedList()}</TodoListItem>
    </TodoContainer>
  );
};
