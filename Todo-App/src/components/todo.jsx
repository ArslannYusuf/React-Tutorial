import React, { useState } from "react";
import { IoMdRemoveCircle } from "react-icons/io";
import { FaEdit, FaCheck } from "react-icons/fa";

const Todo = ({todo, onDeleteTodo, onUpdateTodo }) => {

    const {id, content} = todo;

    const [editable, setEditable]= useState(false);
    const [editTodo, setEditTodo] = useState(content);

    const deleteTodo = ()=>{
        onDeleteTodo(id);
    }

    const updateTodo = () => {
        const request = {
            id: id,
            content: editTodo
        }
        onUpdateTodo(request);
        setEditable(false);
    }
    

  return (
    <div className="todo-div">
      <div className="todo-text"> 
        {
        editable ?      
         <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} type='text'  className='todo-edit-input'/> : content
        }
      </div>

      <div>
        <IoMdRemoveCircle className="todo-icons todo-delete" onClick={deleteTodo} />
        {
            editable ? <FaCheck className="todo-icons todo-check" onClick={updateTodo}/> :  <FaEdit className="todo-icons todo-edit" onClick={()=> setEditable(true)}/>
        }
       
        
      </div>
    </div>
  );
};

export default Todo;
