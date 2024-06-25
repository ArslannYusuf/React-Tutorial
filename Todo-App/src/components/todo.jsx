import React from "react";
import { IoMdRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

const Todo = ({todo, onDeleteTodo }) => {

    const {id, content} = todo;

    const deleteTodo = ()=>{
        onDeleteTodo(id);
    }

  return (
    <div className="todo-div">
      <div className="todo-text">{content}</div>
      <div>
        <IoMdRemoveCircle className="todo-icons todo-delete" onClick={deleteTodo} />
        <FaEdit className="todo-icons todo-edit" />
      </div>
    </div>
  );
};

export default Todo;
