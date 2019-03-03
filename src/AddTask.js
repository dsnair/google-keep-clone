import React from 'react'

function AddTask({ task, addTask, updateTask }) {
  return (
    <form onSubmit={addTask}>
      <input type="checkbox" />
      <input
        type="text"
        value={task}
        placeholder="Add task"
        onChange={updateTask}
      />
    </form>
  )
}

export default AddTask
