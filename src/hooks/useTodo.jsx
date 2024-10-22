import { useState ,useEffect} from "react";
export const useTodo = () => {
    
const [todos, setTodos] = useState([]); 
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
  return {
    todos,
    addingTodo , 
    deleteTodo, 
    completeToDo , 
  };
}
