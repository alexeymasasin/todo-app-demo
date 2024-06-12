import Todo from './Todo';
import styles from './TodoList.module.css';
import { AnimatePresence, motion, Reorder } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

function TodoList({
  importantTodo,
  completedTodosCount,
  deleteTodo,
  todos,
  hidden,
  setTodos,
  toggleTodo,
}) {

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

  const { t } = useTranslation();

  const constraintsRef = useRef(null);

  return (
    <motion.div layout ref={constraintsRef}
                className={styles.todo_list_container}>
      <AnimatePresence mode="wait">
        {todos.length === 0 &&
          <motion.h3 className={styles.is_todolist_empty}
                     key="is_todolist_empty"
                     transition={{ duration: 0.3, delay: 0.5 }}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{
                       opacity: 0, transition: { delay: 0 },
                     }}>{t('TODOLIST_IS_EMPTY')}</motion.h3>}
      </AnimatePresence>
      <Reorder.Group values={todos}
                     onReorder={setTodos}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{
                       opacity: 0,
                       transition: { delay: 0.2 },
                     }}
                     key="reorder_group">
        <AnimatePresence key="todos_map_anim">
          {hidden ? null : todos.map((todo) => (
            <Reorder.Item value={todo} key={todo.id}
                          dragConstraints={constraintsRef}
                          dragTransition={{
                            bounceStiffness: 300,
                            bounceDamping: 50,
                          }}
                          whileHover={{ scale: 1.025 }}>
              <Todo importantTodo={importantTodo} deleteTodo={deleteTodo}
                    todo={todo} key={todo.id}
                    toggleTodo={toggleTodo}/>

            </Reorder.Item>

          ))}

        </AnimatePresence>
      </Reorder.Group>
      <AnimatePresence key="completed_todos">
        <motion.div>
          {!!completedTodosCount &&
            <h3 key="completed_todos_count"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { delay: 0.2 },
                }}>
              {t(
                'YOU_COMPLETED')} {completedTodosCount} {todosDeclinationHandler()}
            </h3>
          }
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default TodoList;