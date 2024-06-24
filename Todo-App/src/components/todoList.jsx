import React from "react";
import Todo from "./todo";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list-div">
      {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodoList;
