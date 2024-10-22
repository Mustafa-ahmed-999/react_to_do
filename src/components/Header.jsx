import React from 'react'


const Header = (props) => {
    const {todos} = props ; 
    const toDosLength = todos.length ; 
    const signleTaskOrNot = todos.length !=1 ? 'tasks' : "task" ; 
  return (

    <h1 className='text-gradient'>you have {toDosLength} open {signleTaskOrNot}</h1>
  )
}

export default Header