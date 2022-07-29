import { SyntheticEvent, useState } from "react";
import Item from "./TodoItem";
import TodoStore from "../store/TodoStore";
import InputValidator from "../validators/InputValidator";

import { observer } from "mobx-react-lite";
import Controls from "./Controls";

const Main = observer(() => {
  
  const [newTodo,setNewTodo] = useState('')
  const [errorMessage,setErrorMessage] = useState('')
  
  
  const addTodo = () => {
    const validationResult = InputValidator.checkInput(newTodo)
    if(validationResult.isValid){
      TodoStore.addTodo({title:newTodo,completed:false,id:new Date().getTime()})
      setNewTodo('')
    }
    setErrorMessage(validationResult.errorMessage)
  }
  
  const handleSubmit = (e : SyntheticEvent) => {
    e.preventDefault()
    addTodo()
  }
  
  const getList = () => {
    switch(TodoStore.toShow){
        case('completed'): return TodoStore.completedTodos
        case('active'): return TodoStore.activeTodos
        default: return TodoStore.todos
    }
  }
  
  return(
    <div className = 'Main'>
      {errorMessage && <p className='error-message'>Error: {errorMessage}</p>}
      <div className='item-input'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type='text' 
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder='test text'/>
          <button onClick={(e) => handleSubmit(e)}>Add</button>
        </form>
      </div>
      <div className='items-container'>{ getList().map((title) => <Item todo={title}/>)}</div>
      <Controls />
    </div>
  )
})

export default Main;
