
import React, { useState } from 'react'
import './App.css'
import AllTodos, { ItodoItem } from './components/AllTodos'
import TodoForm from './components/TodoForm'
import TodoData from './components/TodoData'

const todoItems=[{
  id:`0`, name: 'doning todo task', isCompleted: true }, {
    name: 'makeing a shawer', isCompleted: false,
    id: '1'
  }]

// Get the current date
let currentDate = new Date();
// Format the date to show day of the week, month, and day of the month
let formattedDate = currentDate.toLocaleDateString('en-US', {
  weekday: 'long',  // Full weekday name (e.g., "Monday")
  month: 'long',    // Full month name (e.g., "December")
  day: 'numeric'    // Day of the month (e.g., "26")
});
console.log(formattedDate)
const [day,month]=formattedDate.split(',')


function App() {
  const [allTasks, setAllTasks] = useState<ItodoItem[]>(todoItems)
  const numbersOfCompletedTasks=allTasks.filter(task=>task.isCompleted===true).length;

  const handleDeleteTask = (id:string) => {
     const todosTasksAfterDelete=allTasks.filter((todoItem:any)=>todoItem.id!==id)
     setAllTasks([...todosTasksAfterDelete])
  }


  const handleAddTask = (name :string) => 
    setAllTasks([...allTasks,{
      isCompleted: false, 
      name,
      id: `${Math.random()}`
    }])
  

const handleUpdateOnTask = (id:string) => {
  const todoItemUpdate=allTasks.filter((todoItem:any)=>todoItem.id===id)[0]
  const todoItemsAfterUpdate=allTasks.filter((todoItem:any)=>todoItem.id!==id)
  setAllTasks([...todoItemsAfterUpdate,{...todoItemUpdate,isCompleted:!todoItemUpdate.isCompleted}])
}

  return (
    <main className='box-shadow'>
          <h1 className='data-info'>{day},<i className='month'>{month.slice(9,month.length)}{month.slice(0,4)}</i></h1>

      <TodoForm handleAddTask ={handleAddTask}/>
      <TodoData numberOfCreatedTasks={allTasks.length}  numberOfCompletedTasks={numbersOfCompletedTasks}/>
      <AllTodos AllTodosObject={allTasks} handleDeleteTask={handleDeleteTask} handleUpdateTask={handleUpdateOnTask}/>
    </main>

  )
}
export default App;
 