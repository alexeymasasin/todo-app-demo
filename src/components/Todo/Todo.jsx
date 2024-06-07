import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Todo.module.css';
import TodoForm from './Todos/TodoForm';
import TodoList from './Todos/TodoList';
import TodosActions from './Todos/TodosActions';
import { AnimatePresence, motion } from 'framer-motion';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [order, setOrder] = useState('DOWN');

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    newTodo.text.trim().length > 1 && setTodos([...todos, newTodo]);
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
    <div className={styles.todo}>
      <AnimatePresence>
        {!!todos.length &&
          <motion.div>
            <TodosActions resetTodos={resetTodosHandler}
                          deleteCompletedTodos={deleteCompletedTodosHandler}
                          completedTodosExist={!!completedTodosCount}
                          key="todos_actions"/>
          </motion.div>
        }
      </AnimatePresence>
      <h1 style={{ userSelect: 'none' }}>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} switchOrder={todosOrderHandler}/>
      <TodoList deleteTodo={deleteTodoHandler} order={order} todos={todos}
                toggleTodo={toggleTodoHandler}/>
      <AnimatePresence mode="wait">
        {!!completedTodosCount &&
          <motion.h2 key="completed_todos_count"
                     transition={{ duration: 0.3 }}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}>You have
            completed {completedTodosCount} {completedTodosCount > 1
              ? 'todos'
              : 'todo'}</motion.h2>
        }
      </AnimatePresence>
    </div>
  );
}

export default Todo;
