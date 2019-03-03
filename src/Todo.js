import React, { useState } from 'react'

function Todo({ todo, index }) {
  return <div className="todo">{todo.item}</div>
}

export default Todo
