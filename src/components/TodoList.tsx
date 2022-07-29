import { SyntheticEvent, useEffect, useState } from "react";
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
    const validation = InputValidator.checkInput(newTodo)
    if(validation.isValid){
      TodoStore.addTodo({title:newTodo,completed:false,id:new Date().getTime()})
      setNewTodo('')
    }
    setErrorMessage(validation.errorMessage)
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

  return (
    <div className="Main">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="item-input">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="What needs to be done?"
          />
          <button onClick={addTodo}>Add</button>
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
