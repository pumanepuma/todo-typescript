import TodoStore from "../store/TodoStore";
import {observer} from 'mobx-react-lite'

const Controls = observer(() => {
  
  const setAll = (val: string) => {
    TodoStore.setToShow(val)
  }
  
  return (
    <div className='Controls'>
      <p>Progress: {TodoStore.completedTodosCount}/{TodoStore.todosCount}</p>
      <div className='control-buttons'>
        <button onClick={() => setAll("all")}>All</button>
        <button onClick={() => setAll("active")}>Active</button>
        <button onClick={() => setAll("completed")}>Completed</button>
      </div>
    </div>
  )
})

export default Controls