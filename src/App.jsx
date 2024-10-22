import React, { useState , useEffect } from 'react'
import Header from './components/header'
import Tabs from './components/tabs'
import { ToDoList } from './components/TodoList';
import TodoInput from './components/TodoInput';

const App = () => {

const [todos, setTodos] = useState([]); 
const [selectedTab , setSelectedTab] = useState("All");
function addingTodo(newTodo){
 setTodos( [...todos , {input :newTodo, complete:false}]) ;
 handleSaveData([...todos , {input :newTodo, complete:false}]) ; 
}
function deleteTodo (index){
  const newList = todos.filter((value, todoIndex) => index !== todoIndex ) ; 
  setTodos(newList) ; 
  handleSaveData(newList) ; 
  
}
function completeToDo (index){
  const updatedTodos = todos.map((todo, todoIndex) =>
    todoIndex === index ? { ...todo, complete: true } : todo
  );
  setTodos(updatedTodos);
  handleSaveData(updatedTodos) ; 
}


function handleSaveData(currTodos) {
  localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }))
}

useEffect(() => {
  if (!localStorage || !localStorage.getItem('todo-app')) { return }
  let db = JSON.parse(localStorage.getItem('todo-app'))
  console.log(db);
  
  setTodos(db.todos)
}, [])
  return (
<>
<Header todos= {todos} />
<Tabs selectedTab= {selectedTab} setSelectedTab= {setSelectedTab} todos= {todos} />
<ToDoList completeToDo={completeToDo} deleteTodo = {deleteTodo}  selectedTab= {selectedTab}  todos= {todos}/>
<TodoInput addingTodo = {addingTodo}/>
</>
  )
}

export default App