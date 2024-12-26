import React from 'react'
import './todoData.css'
interface ItodoData {
  numberOfCompletedTasks: number
  numberOfCreatedTasks: number
}
const TodoData = ({ numberOfCompletedTasks, numberOfCreatedTasks }: ItodoData) => {
  return (
    <section className='todo-data-contineer'>
      <section className='todo-data'>
        <h2>{
          numberOfCompletedTasks
        }</h2>
        <p>completed tasks</p>
      </section>
      <section className='todo-data'>
        <h2>{numberOfCreatedTasks}
        </h2>
        <p>
          created tasks
        </p>
      </section>
    </section>
  )
}


export default TodoData