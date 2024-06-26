import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './TodoApp.module.css';
import TodoForm from './Todos/TodoForm';
import TodoList from './Todos/TodoList';
import TodosActions from './Todos/TodosActions';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import Title from '../UI/Title';

function TodoApp() {
  useDocumentTitle('HOME_PAGE');

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let actual = true;
    if (actual) {
      const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      setTodos(storedTodos);
    }
    return () => {
      actual = false;
    };
  }, []);

  useEffect(() => {
    let actual = true;
    if (actual) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
    return () => {
      actual = false;
    };
  }, [todos]);

  const { t } = useTranslation();

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
    Swal.fire({
      title: t('RESET_ALL?'),
      showCancelButton: true,
      confirmButtonText: t('YES'),
      confirmButtonColor: 'var(--text_secondary)',
      cancelButtonText: t('NO'),
      cancelButtonColor: '#575c65',
      icon: 'warning',
      iconColor: 'var(--text_secondary)',
      width: '20em',
      color: 'var(--text_color)',
      background: 'var(--bg_color)',
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos([]);
        Swal.fire({
          title: t('DONE!'),
          text: t('TODOS_DELETED'),
          icon: 'success',
          iconColor: 'var(--text_secondary)',
          confirmButtonText: t('OK'),
          confirmButtonColor: 'var(--text_secondary)',
          width: '20em',
          color: 'var(--text_color)',
          background: 'var(--bg_color)',
        });
      }
    });
  };

  const deleteCompletedTodosHandler = () => {
    Swal.fire({
      title: t('RESET_COMPLETED?'),
      showCancelButton: true,
      confirmButtonText: t('YES'),
      confirmButtonColor: 'var(--text_secondary)',
      cancelButtonText: t('NO'),
      cancelButtonColor: '#575c65',
      icon: 'question',
      iconColor: 'var(--text_secondary)',
      width: '20em',
      color: 'var(--text_color)',
      background: 'var(--bg_color)',
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos(todos.filter((todo) => !todo.isCompleted));
        Swal.fire({
          title: t('DONE!'),
          text: t('TODOS_DELETED'),
          icon: 'success',
          iconColor: 'var(--text_secondary)',
          confirmButtonText: t('OK'),
          confirmButtonColor: 'var(--text_secondary)',
          width: '20em',
          color: 'var(--text_color)',
          background: 'var(--bg_color)',
        });
      }
    });
  };

  const hideTodosHandler = () => {
    setHidden(!hidden);
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

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
      <Title title="Todo App"/>
      <TodoForm addTodo={addTodoHandler} hideTodos={hideTodosHandler}
                hidden={hidden}
                key="todo_form"/>
      <AnimatePresence>
        <TodoList completedTodosCount={completedTodosCount}
                  deleteTodo={deleteTodoHandler} todos={todos}
                  hidden={hidden}
                  setTodos={setTodos}
                  toggleTodo={toggleTodoHandler}
                  importantTodo={importantTodoHandler} key="todo_list"/>
      </AnimatePresence>
    </motion.div>
  );
}

export default TodoApp;
