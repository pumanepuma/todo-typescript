import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoStore from "../store/TodoStore";
import {nanoid} from 'nanoid'
import InputValidator from "../validators/InputValidator";

import { observer } from "mobx-react-lite";

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

  return (
    <div className="TodosContainer">
      {getTodos().map((todo) => (
        <TodoItem todo={todo} key={nanoid()}/>
      ))}
      <div className="TaskInputContainer">
        <form>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="What needs to be done?"
          />
        </form>
        <button onClick={addTodo}>Add</button>
        <button onClick={() => setNewTodo('')}>Clear</button>
      </div>
      {
          errorMessage && <p className='error-message'>{errorMessage}</p>
      }
    </div>
  )
})

export default TodoList;
