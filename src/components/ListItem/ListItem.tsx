import { ToDo } from "../../models/todo-item";
import { NavLink } from "./ListItem.styled";
export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (
    <>
      <NavLink
        className={`${todo.isDone ? "done" : "notDone"}`}
        to={`/list/${todo.id}`}
      >
        {todo.text}
      </NavLink>
    </>
  );
};
