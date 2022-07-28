import { SyntheticEvent, useState } from "react";
import TodoItem from "./TodoItem";
import TodoStore from "../store/TodoStore";
import {nanoid} from 'nanoid'
import InputValidator from "../validators/InputValidator";

import { observer } from "mobx-react-lite";
import Controls from "./Controls";

const TodoList = observer(() => {
  const [newTodo, setNewTodo] = useState("")
  const [errorMessage,setErrorMessage] = useState('')

  const addTodo = () => {
    let validationResult = InputValidator.checkInput(newTodo)
    if(validationResult.isValid){
      TodoStore.addTodo({
        title: newTodo,
        completed: false,
        id: new Date().getTime()
      });
      setNewTodo("")
      setErrorMessage('')
    }
    else{
      setErrorMessage(validationResult.errorMessage)
    }
  }

  const getTodos = () => {
    switch (TodoStore.toShow) {
      case "all":
        return TodoStore.todos;
      case "completed":
        return TodoStore.completedTodos;
      default:
        return TodoStore.incompletedTodos;
    }
  }

  const clear = () => {
    setNewTodo('')
    setErrorMessage('')
  }
  
  const handleSubmit = (event : SyntheticEvent) => {
    event.preventDefault()
    addTodo()
  }

  return (
    <div className="Main">
      <div className="item-input">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="What needs to be done?"
          />
          <button onClick={addTodo}>Add</button>
        </form>
      </div>
      <div className="items-container">
        {getTodos().map((todo) => (
          <TodoItem todo={todo} key={nanoid()}/>
        ))}
      </div>
      <Controls />
    </div>
  )
})

export default TodoList;
