import React, { useState } from 'react'
import './App.css'

import Todo from './Todo'

function App() {
  const [todo, setTodo] = useState([
    {
      item: 'Walk the dog',
      isComplete: false
    },
    {
      item: 'Do laundry',
      isComplete: false
    }
  ])
  return (
    <div className="App">
      <div className="todo-list">
        {todo.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default App
