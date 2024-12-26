import React from 'react'
import './allTodos.css'
import TodoItem from './TodoItem'

export interface ItodoItem {
  id: string,
  name: string,
  isCompleted: boolean
}
interface IallTodos {
  AllTodosObject: ItodoItem[]
  , handleDeleteTask: (id: string) => void, 
  handleUpdateTask: (id: string) => void
}
const AllTodos = ({ AllTodosObject, handleDeleteTask, handleUpdateTask }: IallTodos) => {

  return (
    <section className='all-todos-contineer'>
      {AllTodosObject.map((todoItem: ItodoItem) => <TodoItem
         name={todoItem.name}
         handleDeleteTask={handleDeleteTask}
         isCompleted={todoItem.isCompleted}
         id={todoItem.id}
          handleUpdateOnTask={handleUpdateTask} />)}
    </section>
  )
}

export default AllTodos
