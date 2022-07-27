import TodoStore from "../store/TodoStore";


const Controls = () => {
  
  const setAll = (val: string) => {
    TodoStore.setToShow(val)
  }
  
  return (
    <div className='Controls'>
      <p>Progress: {TodoStore.todos.filter((el) => el.completed).length}/{" "}
        {TodoStore.todos.length}</p>
      <div className='control-buttons'>
        <button onClick={() => setAll("all")}>All</button>
        <button onClick={() => setAll("active")}>Active</button>
        <button onClick={() => setAll("completed")}>Completed</button>
      </div>
    </div>
  )
}

export default Controls