import React, { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const handleUpdateTask = e => setTask(e.target.value)

  const [tasks, setTasks] = useState([])
  const handleAddTask = e => {
    e.preventDefault()
    if (!task) return // don't add empty task to array
    setTasks([...tasks, { task, isComplete: false }])
    setTask('')
  }

  const handleCompleteTask = index => {
    const newTasks = [...tasks]
    // newTasks.splice(index, 1)
    // newTasks.push({
    //   task: tasks[index].task,
    //   isComplete: !tasks[index].isComplete
    // })
    newTasks.splice(index, 1, {
      task: tasks[index].task,
      isComplete: !tasks[index].isComplete
    })
    setTasks(newTasks)
  }

  const handleDeleteTask = index => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  return (
    <div className="App">
      {tasks.map((item, index) => (
        <form onSubmit={handleAddTask} key={index}>
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={() => handleCompleteTask(index)}
          />
          <input
            type="text"
            value={item.task}
            onChange={handleUpdateTask}
            style={{ textDecoration: item.isComplete && 'line-through' }}
          />
          <button onClick={() => handleDeleteTask(index)}>x</button>
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
