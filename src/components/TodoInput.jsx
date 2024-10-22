import React, { useState } from 'react'

const TodoInput = ({addingTodo}) => {
    const [input,setInput] = useState("") ; 
  return (
    <div className="input-container">
    <input type="text" name="" id=""  placeholder='add task' value={input} onChange={
        (e)=> setInput(e.target.value) 
    }/>
    <button onClick={
        ()=>{
       if(input){
        addingTodo(input) ; 
        setInput("")

       }else{
        alert("please write a task")  ; 
       }
    }}>
    <i class="fa-solid fa-plus"></i>  
    </button>
    </div> ); 
}

export default TodoInput