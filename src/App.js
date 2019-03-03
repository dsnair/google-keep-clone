import React, { useState } from 'react'
import './App.css'

import AddTask from './AddTask'

function App() {
  const [task, setTask] = useState('')
  const handleUpdateTask = e => setTask(e.target.value)

  const [tasks, setTasks] = useState([])
  const handleAddTask = e => {
    e.preventDefault()
    setTasks([...tasks, task])
    setTask('')
  }

  return (
    <div className="App">
      {tasks.map((item, index) => (
        <div key={index}>
          <input type="checkbox" />
          <input
            type="text"
            value={item}
            placeholder="Add task"
            onChange={handleUpdateTask}
          />
        </div>
      ))}
      <AddTask
        task={task}
        addTask={handleAddTask}
        updateTask={handleUpdateTask}
      />
    </div>
  )
}

export default App
