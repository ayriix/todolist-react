import { Form } from "../components/Form/Form";
import { TodoList } from "../components/TodoList/TodoList";
import { ToDo } from "../models/todo-item";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { createAction, deleteAction, updateAction } from "../feature/todoList";

export const MainPage = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);
  const dispatch = useDispatch();

  const createNewTodo = (text: string) => {
    dispatch(createAction(text));
  };

  const updateTodo = (todoItem: ToDo) => {
    dispatch(updateAction(todoItem));
  };
  const deleteTodo = (todoItem: ToDo) => {
    dispatch(deleteAction(todoItem));
  };
  return (
    <>
      <Form createNewTodo={createNewTodo} />
      <TodoList
        todos={todoList}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};
