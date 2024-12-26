import  {  FormEvent, useState } from 'react'
import './TodoForm.css'


interface ItodoForm {
  handleAddTask: (name:string) => void
}

const TodoForm = ({handleAddTask}:ItodoForm) => {
const [haveError,setHaveError]=useState(false);
const [nameTask,setNameTask]=useState('');


const handleChaneNameTask=(newName:string)=>{
  setNameTask(newName)
  setHaveError(false)
}
  const handleSubmitForm =(e: FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
 nameTask?handleAddTask(nameTask):setHaveError(true)
  setNameTask('')
  }


  return (
  
    <form className='todoForm' onSubmit={(e)=>handleSubmitForm(e)}>      
      <input 
        value={nameTask}
        className={`todo-entered ${haveError?'error-input':''}`}
        placeholder='type todo here'
        onChange={e=>
         handleChaneNameTask(e.target.value)}
           />
      <button className='add-todo-btn'>
        add task
      </button>


    </form>
  
  )
}

export default TodoForm
