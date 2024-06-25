import { useState } from 'react';
import './App.css'
import TodoCreate from './components/todoCreate'
import TodoList from './components/todoList'


function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  
  console.log(todos)

  const deleteTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)])

  }

  const updateTodo = (newTodo) => {
    const updatedTodos =  todos.map((todo)=>todo.id !== newTodo.id ? todo : newTodo)

    setTodos([...updatedTodos]);
  }


  return (
   <div className="App">

      <div className='todo-app'>
      <TodoCreate onCreateTodo={createTodo}/>
      <TodoList todos={todos} onDeleteTodo={deleteTodo} onUpdateTodo={updateTodo}/>
      </div>

   </div>
  )
}

export default App
