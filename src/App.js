import React, { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const handleUpdateTask = e => setTask(e.target.value)

  const [tasks, setTasks] = useState([])
  const handleAddTask = e => {
    e.preventDefault()
    if (!task) return  // don't add empty task to array
    setTasks([...tasks, task])
    setTask('')
  }

  return (
    <div className="App">
      {tasks.map((item, index) => (
        <form onSubmit={handleAddTask} key={index}>
          <input type="checkbox" />
          <input type="text" value={item} onChange={handleUpdateTask} />
        </form>
      ))}
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={task}
          placeholder="Add task"
          onChange={handleUpdateTask}
        />
      </form>
    </div>
  )
}

export default App
