import React, { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const handleAdd = e => {
    e.preventDefault()
    if (!task) return // don't add empty task to array
    setTasks([...tasks, { task, isComplete: false }])
    setTask('')
  }

  const handleComplete = index => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1, {
      task: tasks[index].task,
      isComplete: !tasks[index].isComplete
    })
    setTasks(newTasks)
  }

  const handleUpdateTask = e => setTask(e.target.value)

  const handleUpdateTasks = index => e => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1, {
      task: e.target.value,
      isComplete: tasks[index].isComplete
    })
    setTasks(newTasks)
  }

  const handleDelete = index => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  return (
    <div className="app">
      {tasks.map((item, index) => (
        <form onSubmit={handleAdd} className="tasksForm" key={index}>
          <div>
            <input
              type="checkbox"
              checked={item.isComplete}
              onChange={() => handleComplete(index)}
            />
            <input
              type="text"
              value={item.task}
              onChange={handleUpdateTasks(index)}
              style={{ textDecoration: item.isComplete && 'line-through' }}
            />
          </div>
          <button
            onClick={() => handleDelete(index)}
            type="button"
            className="timesBtn"
          >
            <i className="fas fa-times" />
          </button>
        </form>
      ))}

      <form onSubmit={handleAdd} className="taskForm">
        <input
          type="text"
          value={task}
          onChange={handleUpdateTask}
          placeholder="+ List Item"
        />
      </form>

      <section className="menu">
        <button>
          <i className="far fa-trash-alt" />
        </button>
        <button>
          <i className="far fa-clone" />
        </button>
      </section>
    </div>
  )
}

export default App
