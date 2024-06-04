import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [order, setOrder] = useState('DOWN');

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const todosOrderHandler = () => {
    if (order === 'DOWN') {
      setOrder('UP');
    } else {
      setOrder('DOWN');
    }
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} switchOrder={todosOrderHandler}/>
      <TodoList deleteTodo={deleteTodoHandler} order={order} todos={todos}/>
    </div>
  );
}

export default App;
