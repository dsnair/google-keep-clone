import React, { useState } from 'react'

function TaskFormInput() {
  const [task, setTask] = useState('')
  const handleChange = e => setTask(e.target.value)
  return (
    <div>
      <input type="checkbox" />
      <input
        type="text"
        value={task}
        placeholder="Add task"
        onChange={handleChange}
      />
      <input type="submit" value="Delete" />
    </div>
  )
}

export default TaskFormInput
