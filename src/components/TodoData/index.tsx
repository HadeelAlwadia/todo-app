import React from 'react'
import './todoData.css'
interface ItodoData {
  numbersOfCompletedTask: number
  numbersOfCreatedTask: number
}
const TodoData = ({ numbersOfCompletedTask, numbersOfCreatedTask }: ItodoData) => {
  return (
    <section className='todo-data-contineer'>
      <section className='todo-data'>
        <h2>{
          numbersOfCompletedTask
        }</h2>
        <p>completed tasks</p>

      </section>
      <section className='todo-data'>
        <h2>{numbersOfCreatedTask}
        </h2>
        <p>
          created tasks
        </p>
      </section>
    </section>
  )
}


export default TodoData