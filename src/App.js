import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

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

  const toggleTodoHandler = (id) => {
    setTodos(todos.map(todo => todo.id === id
      ? { ...todo, isCompleted: !todo.isCompleted }
      : { ...todo },
    ));
  };

  const resetTodosHandler = () => {
    if (window.confirm('Are you sure you want to delete all of your todos?')) {
      setTodos([]);
    } else {
      return;
    }
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const todosOrderHandler = () => {
    if (order === 'DOWN') {
      setOrder('UP');
    } else {
      setOrder('DOWN');
    }
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      {!!todos.length && <TodosActions resetTodos={resetTodosHandler}
                                       deleteCompletedTodos={deleteCompletedTodosHandler}
                                       completedTodosExist={!!completedTodosCount}/>}
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} switchOrder={todosOrderHandler}/>
      <TodoList deleteTodo={deleteTodoHandler} order={order} todos={todos}
                toggleTodo={toggleTodoHandler}/>
    </div>
  );
}

export default App;
