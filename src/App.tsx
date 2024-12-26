
import React, { useState } from 'react'
import './App.css'
import AllTodos, { ItodoItem } from './components/AllTodos'
import TodoForm from './components/TodoForm'
import TodoData from './components/TodoData'

function App() {
  const [allTasks, setAllTasks] = useState<ItodoItem[]>([{
    id:`0`, name: 'doning todo task', isCompleted: true }, {
      name: 'makeing a shawer', isCompleted: false,
      id: '1'
    }]) 


  const handleDeleteTask = (id:string) => {
     const todosTasksAfterDelet=allTasks.filter((todoItem:any)=>todoItem.id!==id)
     setAllTasks([...todosTasksAfterDelet])


  }



  const handleAddTask = (event:any, name :string) => {
    event.preventDefault()
    setAllTasks([...allTasks,{
      isCompleted: false, name,
      id: `${Math.random()}`
    }])
  }

 
const handleUpdateOnTask = (id:string) => {
  const todoItemUpdate=allTasks.filter((todoItem:any)=>todoItem.id===id)[0]
  const todoItemArray=allTasks.filter((todoItem:any)=>todoItem.id!==id)
  setAllTasks([...todoItemArray,{...todoItemUpdate,isCompleted:!todoItemUpdate.isCompleted}])
}

  return (
    <main className='box-shadow'>
      <TodoForm handleAddTask ={handleAddTask}/>
      <TodoData numbersOfCreatedTask={allTasks.length}  numbersOfCompletedTask={allTasks.filter(task=>task.isCompleted===true).length} />
      <AllTodos AllTodos={allTasks} handleDeleteTask={handleDeleteTask} handleUpdateOnTask={handleUpdateOnTask}/>
    </main>

  )
}
export default App;0
