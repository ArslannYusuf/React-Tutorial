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


  return (
   <div className="App">

      <div className='todo-app'>
      <TodoCreate onCreateTodo={createTodo}/>
      <TodoList todos={todos}/>
      </div>

   </div>
  )
}

export default App
