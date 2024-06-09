import Todo from './Todo';
import styles from './TodoList.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function TodoList({ importantTodo, deleteTodo, order, todos, toggleTodo }) {
  const { t } = useTranslation();

  return (
    <div className={styles.todo_list_container}>
      <AnimatePresence>
        {todos.length === 0 &&
          <motion.h3 className={styles.is_todolist_empty}
                     key="is_todolist_empty"
                     transition={{ duration: 0.3, delay: 0.3 }}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0, transition: { delay: 0 } }}>
            {t('Todo list is empty')}</motion.h3>}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {
          order === 'DOWN'
            ? todos.map((todo) => (
              <motion.div layout transition={{ duration: 0.3, delay: 0.3 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          key={todo.id}
                          exit={{
                            opacity: 0,
                            transition: { delay: 0, type: 'spring' },
                          }}>
                <Todo importantTodo={importantTodo} deleteTodo={deleteTodo}
                      todo={todo} key={todo.id}
                      toggleTodo={toggleTodo}/>
              </motion.div>
            ))
            : todos.map((todo) => (
              <motion.div layout transition={{ duration: 0.3, delay: 0.3 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          key={todo.id}
                          exit={{ opacity: 0, transition: { delay: 0 } }}>
                <Todo importantTodo={importantTodo} deleteTodo={deleteTodo}
                      todo={todo} key={todo.id}
                      toggleTodo={toggleTodo}/>
              </motion.div>
            )).reverse()
        }
      </AnimatePresence>
    </div>
  );
}

export default TodoList;