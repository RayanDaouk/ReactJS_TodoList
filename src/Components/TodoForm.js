import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    })

    setInput('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <div className="flex">
          <input
            type="text"
            placeholder="Add your todo"
            value={input}
            name="text"
            className="w-full p-2 text-xl leading-normal transition border-4 border-blue-500 border-solid appearance-none todo-input text-grey-800 focus:outline-none"
            onChange={handleChange}
            ref={inputRef}
          />
          <button
            className="todo-btn"
            type="submit"
            className="p-5 bg-blue-100 border-t-4 border-b-4 border-r-4 border-blue-500 focus:outline-none hover:bg-green-100"
          >
            Edit
          </button>
        </div>
      ) : (
        <div className="flex">
          <input
            type="text"
            placeholder="Add your todo"
            value={input}
            name="text"
            className="w-full p-2 text-xl leading-normal transition border-4 border-blue-500 border-solid appearance-none todo-input text-grey-800 focus:outline-none"
            onChange={handleChange}
            ref={inputRef}
          />
          <button
            className="todo-btn"
            type="submit"
            className="p-5 bg-blue-100 border-t-4 border-b-4 border-r-4 border-blue-500 focus:outline-none hover:bg-green-100"
          >
            Add todo
          </button>
        </div>
      )}
    </form>
  )
}

export default TodoForm
