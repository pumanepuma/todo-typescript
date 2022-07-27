import { useState } from "react";
import TodoItem from "./TodoItem";
import { TodoType } from "../types/TodoTypes";
import TodoStore from "../store/TodoStore";

import { observer } from "mobx-react-lite";

const TodoList = observer(() => {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [newTodo, setNewTodo] = useState("")
  const addTodo = () => {
    TodoStore.addTodo({
      title: newTodo,
      completed: false,
      id: new Date().getTime(),
    });
    setNewTodo("")
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
        <TodoItem todo={todo} />
      ))}
      <div className="TaskInputContainer">
        <form>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="new todo"
          />
        </form>
        <button onClick={addTodo}>add</button>
      </div>
    </div>
  )
})

export default TodoList;
