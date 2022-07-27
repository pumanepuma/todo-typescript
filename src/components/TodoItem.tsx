import React from 'react'
import {TodoItemProps} from '../types/TodoTypes'
import TodoStore from '../store/TodoStore'

import { observer } from "mobx-react-lite";

const TodoItem: React.FC<TodoItemProps> = observer(({todo}) => {
  
  const deleteTodoItem = () => {
    console.log('deleting')
    TodoStore.deleteTodo(todo)
  }
  
  return (
    <div id={todo.id.toString()} className='TodoItemContainer'>
      <div className='todoItem'>
        <button onClick={deleteTodoItem}>X</button>
        <span style={todo.completed ? {textDecoration:'line-through'}:{}}
          className='todo-title'>{todo.title}</span>
      </div>
      <button onClick={() => TodoStore.completeTodo(todo)}
        style={todo.completed ? {color:'green'}: {}}>done</button>
    </div>
  )
})

export default TodoItem