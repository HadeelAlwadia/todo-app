import React from 'react'
import './allTodos.css'


import TodoItem from './TodoItem'
export interface ItodoItem {
  id:string,
  name: string,
  isCompleted: boolean
}
const AllTodos = ({ AllTodos, handleDeleteTask ,handleUpdateOnTask}:
   {
   AllTodos: ItodoItem[], 
   handleDeleteTask: (id:string) => void ,
handleUpdateOnTask:(id:string)=>void}
    ) => {

  return (
    <section className='all-todos-contineer'>
      {AllTodos.map((todoItem: ItodoItem) => <TodoItem name={todoItem.name}
      handleDeleteTask={handleDeleteTask}
      isCompleted={todoItem.isCompleted} id={todoItem.id} handleUpdateOnTask={handleUpdateOnTask} />)}
    </section>
  )
}

export default AllTodos
