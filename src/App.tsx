import './App.css';
import TodoList from './components/TodoList';
import Controls from './components/Controls';

function App() {
  return (
    <div className='App'>
      <h1>Todo List App</h1>
      <TodoList />
      <Controls />
    </div>
  );
}

export default App;
