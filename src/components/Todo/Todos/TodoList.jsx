import Todo from './Todo';
import styles from './TodoList.module.css';
import { AnimatePresence, motion, Reorder } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function TodoList({
  importantTodo,
  deleteTodo,
  todos,
  hidden,
  setTodos,
  toggleTodo,
}) {
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
                     exit={{
                       opacity: 0,
                       transition: { delay: 0.3 },
                     }}>
            {t('Todo list is empty')}</motion.h3>}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        <Reorder.Group axis="y" values={todos} onReorder={setTodos}
                       key="reorder_when_down">
          {hidden ? '' : todos.map((todo) => (
            <Reorder.Item layout value={todo} key={todo.id}>
              <motion.div transition={{ duration: 0.2, delay: 0.2 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          key={todo.id}
                          exit={{ opacity: 0, transition: { delay: 0.2 } }}>
                <Todo importantTodo={importantTodo} deleteTodo={deleteTodo}
                      todo={todo} key={todo.id}
                      toggleTodo={toggleTodo}/>
              </motion.div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </AnimatePresence>
    </div>
  );
}

export default TodoList;