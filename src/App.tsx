import './styles/style.scss';
import TodoList from './components/TodoList';
import Controls from './components/Controls';

function App() {
  return (
    <div className='App'>
      <h1>Todo</h1>
      <TodoList />
    </div>
  );
}

export default App;
