
import React from 'react'
import './App.css'
import AllTodos from './components/AllTodos'
import TodoForm from './components/TodoForm'
import TodoData from './components/TodoData'
function App() {

  return (
    <main>
     <TodoForm/>
     <TodoData/>
     <AllTodos/>
    </main>

  )
}
export default App
