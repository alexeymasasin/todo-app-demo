import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './Todo.module.css';
import TodoForm from './Todos/TodoForm';
import TodoList from './Todos/TodoList';
import TodosActions from './Todos/TodosActions';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function Todo() {
  useDocumentTitle('Home');

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      isImportant: false,
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

  const importantTodoHandler = (id) => {
    setTodos(todos.map(todo => todo.id === id
      ? { ...todo, isImportant: !todo.isImportant }
      : { ...todo },
    ));
  };

  const resetTodosHandler = () => {
    if (window.confirm('Are you sure you want to delete all of your todos?')) {
      setTodos([]);
    }
  };

  const todosDeclinationHandler = () => {
    if (completedTodosCount % 10 === 1 && completedTodosCount % 100 !== 11) {
      return t('TASKS_ONE');
    } else if (completedTodosCount % 10 >= 2 && completedTodosCount % 10 <= 4 &&
      (completedTodosCount % 100 < 10 || completedTodosCount % 100 >= 20)) {
      return t('TASKS_FEW');
    } else {
      return t('TASKS_MANY');
    }
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const hideTodosHandler = () => {
    setHidden(!hidden);
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  const { t } = useTranslation();

  return (
    <motion.div className={styles.todo} initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}>
      <AnimatePresence mode="wait">
        {!!todos.length &&
          <TodosActions resetTodos={resetTodosHandler}
                        deleteCompletedTodos={deleteCompletedTodosHandler}
                        completedTodosExist={!!completedTodosCount}
                        key="todos_actions"/>
        }
      </AnimatePresence>
      <h1 style={{ userSelect: 'none' }} key="title">Todo App</h1>
      <TodoForm addTodo={addTodoHandler} hideTodos={hideTodosHandler}
                hidden={hidden}
                key="todo_form"/>
      <TodoList deleteTodo={deleteTodoHandler} todos={todos} hidden={hidden}
                setTodos={setTodos}
                toggleTodo={toggleTodoHandler}
                importantTodo={importantTodoHandler} key="todo_list"/>
      <AnimatePresence mode="wait">
        <motion.div layout transition={{ duration: 0.2, delay: 0.2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    key="todo_list_container"
                    exit={{
                      opacity: 0,
                      transition: { delay: 0.2 },
                    }}>
          {!!completedTodosCount &&
            <motion.h3 key="completed_todos_count"
                       className={styles.completed_todos}>{t(
              'YOU_COMPLETED')} {completedTodosCount} {todosDeclinationHandler()}
            </motion.h3>
          }
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default Todo;
