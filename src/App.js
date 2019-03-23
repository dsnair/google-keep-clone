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
    <>
      {tasks.map((item, index) => (
        <form onSubmit={handleAdd} className="tasksForm" key={index}>
          <div>
            <i
              className={
                item.isComplete ? 'far fa-check-square' : 'far fa-square'
              }
              onClick={() => handleComplete(index)}
            />
            <input
              type="text"
              value={item.task}
              onChange={handleUpdateTasks(index)}
              style={{ textDecoration: item.isComplete && 'line-through' }}
            />
          </div>
          <i className="fas fa-times" onClick={() => handleDelete(index)} />
        </form>
      ))}

      <form onSubmit={handleAdd}>
        <i className="fas fa-plus" />
        <input
          type="text"
          value={task}
          onChange={handleUpdateTask}
          placeholder="List Item"
        />
      </form>

      <section className="menu">
        <i className="far fa-trash-alt" />
        <i className="far fa-clone" />
      </section>
    </>
  )
}

export default App
