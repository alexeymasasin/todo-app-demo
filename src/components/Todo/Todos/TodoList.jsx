import Todo from './Todo';
import styles from './TodoList.module.css';
import { AnimatePresence, motion } from 'framer-motion';

function TodoList({ deleteTodo, order, todos, toggleTodo }) {

  return (
    <div className={styles.todo_list_container}>
      <AnimatePresence>
        {todos.length === 0 &&
          <motion.h2 className={styles.is_todolist_empty}
                     key="is_todolist_empty"
                     transition={{ duration: 0.3, delay: 0.3 }}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0, transition: { delay: 0 } }}>
            Todo list is empty</motion.h2>}
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
                <Todo deleteTodo={deleteTodo} todo={todo} key={todo.id}
                      toggleTodo={toggleTodo}/>
              </motion.div>
            ))
            : todos.map((todo) => (
              <motion.div layout transition={{ duration: 0.3, delay: 0.3 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          key={todo.id}
                          exit={{ opacity: 0, transition: { delay: 0 } }}>
                <Todo deleteTodo={deleteTodo} todo={todo} key={todo.id}
                      toggleTodo={toggleTodo}/>
              </motion.div>
            )).reverse()
        }
      </AnimatePresence>
    </div>
  );
}

export default TodoList;