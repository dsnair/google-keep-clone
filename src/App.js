import React, { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')
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

  const handleUpdateTask = e => setTask(e.target.value)

  const handleDeleteTask = index => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  return (
    <div className="app">
      {tasks.map((item, index) => (
        <form onSubmit={handleAddTask} className="tasksForm" key={index}>
          <div>
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
          </div>
          <button onClick={() => handleDeleteTask(index)}>
            <i className="fas fa-times" />
          </button>
        </form>
      ))}

      <form onSubmit={handleAddTask} className="taskForm">
        <input
          type="text"
          value={task}
          onChange={handleUpdateTask}
          placeholder="+ List Item"
        />
      </form>
    </div>
  )
}

export default App
