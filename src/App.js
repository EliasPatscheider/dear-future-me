import React, { useState, useRef, useEffect } from 'react';
import TodoList from "./TodoList.js";
const { v4: uuidv4 } = require('uuid');

const LOCAL_STORAGE_KEY = 'todoApp.todos'
function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef()

  //weart lei oamol ausgführt
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  //wenn sich todos ändert weart des olbn ausgführt
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    // fills up the array?
    const newTodos = [...todos]
    const todo = newTodos.find( todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleClearTodos(e) {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  return (
    <>
      <TodoList todos = {todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type='text'></input>
      <button onClick={handleAddTodo}>Add todo</button>
      <button onClick={handleClearTodos}>Clear completed todos</button>
      <div> {todos.filter(todo => !todo.complete).length} left to do </div>
    </>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
