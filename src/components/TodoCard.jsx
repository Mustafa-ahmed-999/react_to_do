import React from 'react'

export const TodoCard = ({todo , deleteTodo , todoIndex , completeToDo}) => {
  
  return (
    <div className='card todo-item'>
      <p>{todo.input}</p>
      <button className='todo-buttons' onClick={
        ()=>completeToDo(todoIndex)
      }>
        <h6>done</h6>
      </button>
      <button onClick={()=>deleteTodo(todoIndex)}>
        <h6>delete</h6>
      </button>
    </div>
  )
}
