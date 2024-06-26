import Todo from './Todo';
import styles from './TodoList.module.css';
import { AnimatePresence, motion, Reorder } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import CompletedTodos from './CompletedTodos';

function TodoList({
  importantTodo,
  completedTodosCount,
  deleteTodo,
  todos,
  hidden,
  setTodos,
  toggleTodo,
}) {

  const { t } = useTranslation();
  const constraintsRef = useRef(null);

  return (
    <motion.div ref={constraintsRef} key="todo_list" className={styles.list}>
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
      <motion.div layout>
        <AnimatePresence>
          <Reorder.Group className={styles.reorder_group} as="div" layout
                         axis="y"
                         values={todos}
                         onReorder={setTodos}
                         key="reorder_group">
            <AnimatePresence key="todos_map_anim">
              {hidden ? '' : todos.map((todo) => (
                <Todo importantTodo={importantTodo}
                      deleteTodo={deleteTodo}
                      todo={todo} key={todo.id}
                      toggleTodo={toggleTodo}
                      constraintsRef={constraintsRef}/>
              ))}
            </AnimatePresence>
            <CompletedTodos key="completed_todos"
                            completedTodosCount={completedTodosCount}/>
          </Reorder.Group>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default TodoList;