import React, { useState , useEffect } from 'react'
import Tabs from './components/tabs'
import { ToDoList } from './components/TodoList';
import TodoInput from './components/TodoInput';
import Header from './components/Header';
import { useTodo } from './hooks/useTodo';

const App = () => {
 const [selectedTab , setSelectedTab] = useState("All");
const{todos, addingTodo ,   deleteTodo,   completeToDo , }=useTodo() ; 
return (
<>
<Header todos= {todos}/>
<Tabs selectedTab= {selectedTab} setSelectedTab= {setSelectedTab} todos= {todos} />
<ToDoList completeToDo={completeToDo} deleteTodo = {deleteTodo}  selectedTab= {selectedTab}  todos= {todos}/>
<TodoInput addingTodo = {addingTodo}/>
</>
  )
}

export default App