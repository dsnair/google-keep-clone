import React, { useState } from 'react'
import './Title.css'

function Title() {
  const [title, setTitle] = useState('')

  const handleTitle = e => setTitle(e.target.value)

  return (
    <input
      type="text"
      value={title}
      onChange={handleTitle}
      placeholder="Title"
      className="title"
    />
  )
}

export default Title
