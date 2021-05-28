import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
  const [todos, setTodos] = useState([])

  /* ------------------------------------ . ----------------------------------- */
  const addTodo = (todo) => {
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
  }
  /* ------------------------ btn function in todo elements ------------------------ */

  const validateTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      console.log('coucou')
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
        console.log(todo.isComplete)
      }
      // Toggle class pour le validate
      return todo
    })
    setTodos(updatedTodos)
  }
  /* ------------------------------------ . ----------------------------------- */
  const editTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item)),
    )
  }
  /* ------------------------------------ . ----------------------------------- */
  const deleteTodo = (id) => {
    console.log('je delete')
    const removeArr = [...todos].filter((todo) => todo.id !== id) // id correspond à null, présent dans todo.js
    console.log(removeArr)
    setTodos(removeArr)
  }

  /* ------------------------------------ . ----------------------------------- */

  return (
    <div>
      <h1 className="text-center">What's the objective Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        validateTodo={validateTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
      {/* On link les datas avec les attributs perso dans lesquel on place la methode utilisé */}
    </div>
  )
}

export default TodoList
