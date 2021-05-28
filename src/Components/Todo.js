import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Todo({ todos, validateTodo, deleteTodo, editTodo }) {
  // Pont pour le compo du dessous
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

  const submitEdit = (value) => {
    editTodo(edit.id, value)
    setEdit({
      id: null,
      value: '',
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitEdit} />
  }

  return todos.map((todo, index) => (
    <div key={index}>
      {/* Toggle class ci-dessus */}
      <div
        className={
          todo.isComplete
            ? 'flex justify-between w-full bg-green-200'
            : 'flex justify-between w-full bg-blue-200'
        }
      >
        <button type="button" onClick={() => validateTodo(todo.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        </button>
        <p>{todo.text}</p>

        <button
          type="button"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>

        <button type="button" onClick={() => deleteTodo(todo.id)}>
          {/* deleteTodo() ici on récupère l'attribut qui possède la méthode de l'autre compo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  ))
}

export default Todo
