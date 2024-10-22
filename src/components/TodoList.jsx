import React from 'react'
import { TodoCard } from './TodoCard'

export const ToDoList = ({todos , selectedTab , deleteTodo , completeToDo}) => {
  let filteredList ; 
switch (selectedTab) {
  case "All":
    filteredList = todos ; 
    break;
case "Completed" :
filteredList = todos.filter(todo => todo.complete) ; 
break;
  default:
    filteredList = todos.filter(todo => !todo.complete) ; 
    break;
}
  return <>
  {
    filteredList.map((todo,todoIndex)=>{
      return (
       <TodoCard completeToDo={completeToDo}  deleteTodo={deleteTodo} todoIndex={todoIndex} todo = {todo} key={todoIndex}/>
      )
    })
  }</>
}
