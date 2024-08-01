import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>TODOS</div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <li>{todo.text}</li>
          <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
        </div>
      ))}
    </>
  );
};

export default Todos;
