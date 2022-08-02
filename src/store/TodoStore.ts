import { makeAutoObservable } from "mobx";
import { TodoType } from "../types/TodoTypes";

const saved : string | null = localStorage.getItem('todos')
let init : Array<TodoType> = []
if(saved) init = JSON.parse(saved)

class TodoStore {
  todos : Array<TodoType>  = init
  toShow = localStorage.getItem('toShow') || 'all';
  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: TodoType) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  deleteTodo(todo: TodoType) {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  completeTodo(todo: TodoType) {
    todo.completed = !todo.completed;
  }
  
  setToShow(val:string){
    this.toShow = val;
    localStorage.setItem('toShow',this.toShow)
  }

  get completedTodos() {
    return this.todos.filter((el) => el.completed);
  }

  get completedTodosCount() {
    return this.todos.filter((el) => el.completed).length;
  }

  get todosCount(){
    return this.todos.length;
  }

  get activeTodos(){
    return this.todos.filter(el => !el.completed)
  }
}

export default new TodoStore();
