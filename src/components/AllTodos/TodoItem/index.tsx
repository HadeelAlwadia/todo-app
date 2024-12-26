import React from 'react'
import './todoItem.css'

interface ItodoItem  {
  handleUpdateOnTask: (id: string) => void,
  id: string, name: string, isCompleted: boolean,
   handleDeleteTask: (id: string) => void
}

const TodoItem = ({ name, isCompleted, handleDeleteTask, id, handleUpdateOnTask }:ItodoItem) => {
  
  return (
    <section className='TodoItem box-shadow'>
      <input type='checkbox' checked={isCompleted} onChange={() => handleUpdateOnTask(id)} />
      <h3>{name}</h3>
      <svg xmlns="http://www.w3.org/2000/svg" onClick={_ => handleDeleteTask(id)} viewBox="0 0 64 20" width="30" height="60">
        <rect x="14" y="18" width="36" height="34" rx="5" ry="5" fill="red" />
        <rect x="12" y="14" width="40" height="6" rx="3" ry="3" fill="red" />
        <circle cx="20" cy="30" r="2" fill="red" />
        <circle cx="32" cy="30" r="2" fill="red" />
        <circle cx="44" cy="30" r="2" fill="red" />
        <circle cx="32" cy="10" r="3" fill="red" />
      </svg>

    </section>
  )
}

export default TodoItem
