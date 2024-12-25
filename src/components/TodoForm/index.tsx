import React, { FormEvent, useState } from 'react'
import './TodoForm.css'


interface ItodoForm {
  handleAddTask: ({ name }: { name: string }) => void
}

const TodoForm = ({handleAddTask}:{handleAddTask:any}) => {
  
const [nameTask,setNameTask]=useState('')
const handleChaneNameTask=(newName:string)=>{
  setNameTask(newName)
}

  return (
  <>
    <h1 className='data-info'>monday,11 Apr</h1>
    <form className='todoForm' onSubmit={(e)=>{

      handleAddTask(e,nameTask)
      setNameTask('')
      }}>
      <input  value={nameTask}className='todo-entered' placeholder='type todo here' onChange={(e)=>handleChaneNameTask(e.target.value)} />
      <button className='add-todo-btn'>
        add task
      </button>


    </form>
  </>
  )
}

export default TodoForm
