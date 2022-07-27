import { makeAutoObservable } from "mobx";
import { TodoType } from "../types/TodoTypes";

class TodoStore {
  todos: any[] = [];
  toShow = "all";
  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: TodoType) {
    this.todos.push(todo);
  }

  deleteTodo(todo: TodoType) {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }

  completeTodo(todo: TodoType) {
    todo.completed = !todo.completed;
  }
  
  setToShow(val:string){
    this.toShow = val
  }

  get completedTodos() {
    return this.todos.filter((el) => el.completed);
  }

  get incompletedTodosCount() {
    return this.todos.filter((el) => !el.completed).length;
  }

  get incompletedTodos() {
    return this.todos.filter((el) => !el.completed);
  }
}

export default new TodoStore();
