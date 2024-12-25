import React from 'react'
import './todoItem.css'


const TodoItem = ({name,isCompleted,handleDeleteTask,id,handleUpdateOnTask}:
     { handleUpdateOnTask:(id:string)=>void,
      id:string,name:string,isCompleted:boolean,handleDeleteTask:(id:string)=>void}) => {
  return (
    <section className='TodoItem box-shadow'>
        <input type='checkbox' checked={isCompleted} onChange={()=>handleUpdateOnTask(id)}/>
        <h3>{name}</h3>
         <p onClick={()=>{handleDeleteTask(id)}}  >delete</p>
    </section>
  )
}

export default TodoItem
