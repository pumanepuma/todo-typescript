import React from 'react'
import {TodoItemProps} from '../types/TodoTypes'
import TodoStore from '../store/TodoStore'

import { observer } from "mobx-react-lite";

const TodoItem: React.FC<TodoItemProps> = observer(({todo}) => {
  
  const deleteTodoItem = () => {
    TodoStore.deleteTodo(todo)
  }
  
  return (
    <div id={todo.id.toString()} className='item'>
        <div style={todo.completed ? {textDecoration:'line-through'}:{}}
          className='item-title wrap'>{todo.title}
        </div>
        <div>
          <button onClick={() => TodoStore.completeTodo(todo)}
            style={todo.completed ? {color:'green'}: {}}>done</button>
          <button onClick={deleteTodoItem}>x</button>
        </div>
          
      
    </div>
  )
})

export default TodoItem