import React, {useState, useEffect} from 'react'
import './App.css'
import { TodoContextProvider } from './context'
import {TodoInput, Todo} from './components'

function App() {
  const t = {id: 1, text: 'Todo Message cdfjbjfef  efhbehfbwef efhwehfbwhef whehwfbehbfwef wehfhwbefwe', completed: false};

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos(prev => [todo, ...prev]);
  }

  const updateTodo = (id, updatedTodo) => {
    setTodos(prev => prev.map(todo => todo.id === id ? updatedTodo : todo));
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  const toggleComplete = (id) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ));
  }

  useEffect(() => {
    // Load initial todos from localStorage or set default
    const storedTodos = JSON.parse(localStorage.getItem('todos'));

    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, [])

  useEffect(() => {
    // Save todos to localStorage whenever they change
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <h1
      className='text-3xl font-bold text-center my-10'
      >
        Manage Your Todos
      </h1>
      <TodoInput />
      <Todo todo={t} />
    </TodoContextProvider>
  )
}

export default App
