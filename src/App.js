import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './Components/TodoList'

const App = () => (
  <div className="py-10">
    <header>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          My Todolist in ReactJS
        </h1>
      </div>
    </header>
    <main>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <div className="border-4 border-gray-200 border-dashed rounded-lg h-96 todo-app">
            <TodoList></TodoList>
          </div>
        </div>
      </div>
    </main>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
