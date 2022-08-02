import TodoStore from "../store/TodoStore";
import {observer} from 'mobx-react-lite'

const Controls = observer(() => {
  
  const setAll = (val: string) => {
    TodoStore.setToShow(val)
  }
  
  return (
    <div className='controls'>
      <p>Progress: {TodoStore.completedTodosCount}/{TodoStore.todosCount}</p>
      <div className='control-buttons'>
        <button onClick={() => setAll("all")} 
        style={TodoStore.toShow === 'all' ? {textDecoration:'underline'} : {}}>All</button>
        <button onClick={() => setAll("active")}
        style={TodoStore.toShow === 'active' ? {textDecoration:'underline'} : {}}>Active</button>
        <button onClick={() => setAll("completed")}
        style={TodoStore.toShow === 'completed' ? {textDecoration:'underline'} : {}}>Completed</button>
      </div>
    </div>
  )
})

export default Controls