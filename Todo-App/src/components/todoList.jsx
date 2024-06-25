import React from "react";
import Todo from "./todo";

const TodoList = ({ todos, onDeleteTodo, onUpdateTodo }) => {
  return (
    <div className="todo-list-div">
      {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onUpdateTodo={onUpdateTodo} />)}
    </div>
  );
};

export default TodoList;
